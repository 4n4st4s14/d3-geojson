
// Width and height
var chart_width     =   800;
var chart_height    =   600;


//projection

var path = d3.geoPath()
    .projection(d3.geoAlbersUsa());

// Create SVG
var svg             =   d3.select("#chart")
    .append("svg")
    .attr("width", chart_width)
    .attr("height", chart_height);


      d3.json( '/data', function( err, data ){
          if( err ){
              return console.log(err);
          }

           console.log(data);
           generate( data );
      });


    generate =(data)=>{


  svg.selectAll('path')
    .data(data.features)
    .enter()
    .append('path')
    .attr('d', path);

}
