/*
 * LightningChartJS example that showcases simple usage of Scrolling Heatmap Grid Series.
 */
// Import LightningChartJS
const lcjs = require("@arction/lcjs");

// Extract required parts from LightningChartJS.
const {
  lightningChart,
  PalettedFill,
  LUT,
  ColorHSV,
  emptyLine,
  LegendBoxBuilders,
  LinearGradientFill,
  ColorRGBA,
  Themes,
} = lcjs;

const { createSpectrumDataGenerator } = require("@arction/xydata");

// Length of single data sample.
const dataSampleSize = 1000;
// Length of visible sweeping history as columns count.
const sweepingHistory = 250;

// Setup PalettedFill for dynamically coloring Heatmap by Intensity values.
const lut = new LUT({
  steps: [
    { value: 0, label: "0", color: ColorHSV(0, 1, 0) },
    { value: 15, label: "15", color: ColorHSV(270, 0.84, 0.2) },
    { value: 30, label: "30", color: ColorHSV(289, 0.86, 0.35) },
    { value: 45, label: "45", color: ColorHSV(324, 0.97, 0.56) },
    { value: 60, label: "60", color: ColorHSV(1, 1, 1) },
    { value: 75, label: "75", color: ColorHSV(44, 0.64, 1) },
  ],
  units: "dB",
  interpolate: true,
});
const paletteFill = new PalettedFill({ lut, lookUpProperty: "value" });

// Create ChartXY.
const chart = lightningChart()
  .ChartXY({
    // theme: Themes.darkGold
  })
  .setTitle("Sweeping Heatmap Spectrogram");

chart
  .getDefaultAxisY()
  .setTitle("Frequency (Hz)")
  .setInterval(0, dataSampleSize, false, true);

// Create heatmap series.
const heatmapGridSeries = chart
  .addHeatmapGridSeries({
    columns: sweepingHistory,
    rows: dataSampleSize,
  })
  .setFillStyle(paletteFill)
  .setWireframeStyle(emptyLine)
  .setMouseInteractions(false);

// Create Band for visualizing sweeping update.
const band = chart.getDefaultAxisX().addBand(true)
  .setStrokeStyle(emptyLine)
  .setFillStyle(new LinearGradientFill({
    angle: 90,
    stops: [
      {offset: 0, color: ColorRGBA(0, 0, 0, 255)},
      {offset: 1, color: ColorRGBA(0, 0, 0, 0)}
    ]
  }))
  .setMouseInteractions(false)

// Add LegendBox to chart.
const legend = chart
  .addLegendBox(LegendBoxBuilders.HorizontalLegendBox)
  // Dispose example UI elements automatically if they take too much space. This is to avoid bad UI on mobile / etc. devices.
  .setAutoDispose({
      type: 'max-width',
      maxWidth: 0.80,
  })
  .add(heatmapGridSeries);

// Stream in sweeping data.
let iSample = 0;
let dataAmount = 0;
createSpectrumDataGenerator()
  .setSampleSize(dataSampleSize)
  // NOTE: Number of unique samples in example data.
  .setNumberOfSamples(12340)
  .setVariation(15)
  .setFrequencyStability(0.7)
  .generate()
  .setStreamRepeat(true)
  .setStreamInterval(25)
  .setStreamBatchSize(1)
  .toStream()
  // Scale Intensity values from [0.0, 1.0] to [0.0, 80]
  .map((sample) => sample.map((intensity) => intensity * 80))
  .forEach((sample) => {
    // Produce sweeping update effect by pushing new samples in by invalidating previous intensity values with sweeping motion.
    heatmapGridSeries.invalidateIntensityValues({
      iColumn: iSample % sweepingHistory,
      iRow: 0,
      values: [sample],
    });

    band
      .setValueStart(iSample % sweepingHistory)
      .setValueEnd(band.getValueStart() + 10)

    dataAmount += sample.length;
    iSample += 1;
  });

// Display incoming points amount in Chart title.
const title = chart.getTitle();
let tStart = Date.now();
let lastReset = Date.now();
const updateChartTitle = () => {
  // Calculate amount of incoming points / second.
  if (dataAmount > 0 && Date.now() - tStart > 0) {
    const pps = (1000 * dataAmount) / (Date.now() - tStart);
    chart.setTitle(`${title} (${Math.round(pps)} data points / s)`);
  }
  // Reset pps counter every once in a while in case page is frozen, etc.
  if (Date.now() - lastReset >= 5000) {
    tStart = lastReset = Date.now();
    dataAmount = 0;
  }
};
setInterval(updateChartTitle, 1000);
