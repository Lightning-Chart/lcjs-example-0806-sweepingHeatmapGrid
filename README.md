# JavaScript Sweeping Heatmap Chart

![JavaScript Sweeping Heatmap Chart](sweepingHeatmapGrid-darkGold.png)

This demo application belongs to the set of examples for LightningChart JS, data visualization library for JavaScript.

LightningChart JS is entirely GPU accelerated and performance optimized charting library for presenting massive amounts of data. It offers an easy way of creating sophisticated and interactive charts and adding them to your website or web application.

The demo can be used as an example or a seed project. Local execution requires the following steps:

-   Make sure that relevant version of [Node.js](https://nodejs.org/en/download/) is installed
-   Open the project folder in a terminal:

          npm install              # fetches dependencies
          npm start                # builds an application and starts the development server

-   The application is available at _http://localhost:8080_ in your browser, webpack-dev-server provides hot reload functionality.


## Description

This example shows how to create a _sweeping update effect_ in 2D Heatmap Chart with LightningChart JS.

This is done by using `HeatmapGridSeries` (static size 2D heatmap) and writing on top of previous heatmap values in sweeping motion.

This behavior is preferred by some users, mostly since the chart gives real-time visualization but at the same time is _immobile_.

For alternate approach with _scrolling data appending_, see our [scrolling heatmap example](https://lightningchart.com/lightningchart-js-interactive-examples/examples/lcjs-example-0803-scrollingHeatmap.html).

Scrolling approach is generally encouraged since it interacts much nicer with _scrolling Axis ticks_, which as can be seen from the scrolling heatmap example - looks really nice with _live data_!

Performance-wise there is not much difference between the two - both operations are optimized to the maximum!


## API Links

* [Scrolling Heatmap Grid Series]
* [Paletted Fill Style]
* [Color lookup table]
* [Color factory HSV]
* [Empty line style]
* [Axis automatic scroll options]
* [Chart XY]
* [Axis XY]


## Support

If you notice an error in the example code, please open an issue on [GitHub][0] repository of the entire example.

Official [API documentation][1] can be found on [LightningChart][2] website.

If the docs and other materials do not solve your problem as well as implementation help is needed, ask on [StackOverflow][3] (tagged lightningchart).

If you think you found a bug in the LightningChart JavaScript library, please contact sales@lightningchart.com.

Direct developer email support can be purchased through a [Support Plan][4] or by contacting sales@lightningchart.com.

[0]: https://github.com/Arction/
[1]: https://lightningchart.com/lightningchart-js-api-documentation/
[2]: https://lightningchart.com
[3]: https://stackoverflow.com/questions/tagged/lightningchart
[4]: https://lightningchart.com/support-services/

© LightningChart Ltd 2009-2025. All rights reserved.


[Scrolling Heatmap Grid Series]: https://lightningchart.com/js-charts/api-documentation/v8.0.1/classes/HeatmapScrollingGridSeriesIntensityValues.html
[Paletted Fill Style]: https://lightningchart.com/js-charts/api-documentation/v8.0.1/classes/PalettedFill.html
[Color lookup table]: https://lightningchart.com/js-charts/api-documentation/v8.0.1/classes/LUT.html
[Color factory HSV]: https://lightningchart.com/js-charts/api-documentation/v8.0.1/functions/ColorHSV.html
[Empty line style]: https://lightningchart.com/js-charts/api-documentation/v8.0.1/variables/emptyLine.html
[Axis automatic scroll options]: https://lightningchart.com/js-charts/api-documentation/v8.0.1/variables/AxisScrollStrategies.html
[Chart XY]: https://lightningchart.com/js-charts/api-documentation/v8.0.1/classes/ChartXY.html
[Axis XY]: https://lightningchart.com/js-charts/api-documentation/v8.0.1/classes/Axis.html

