const data = [
		{
			type:"WMTS",
			name: "IgnPlanV2", 
			url:'https://wxs.ign.fr/choisirgeoportail/geoportail/wmts', 
			layer:"GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2",
			matrixSet:"PM",
			format:"image/png",
		        projection:"EPSG:3857",
			style:"normal",
			origin:[-20037508, 20037508],
			resolutions:[
				156543.03392804103,78271.5169640205,39135.75848201024,
				19567.879241005125,9783.939620502562,4891.969810251281,
				2445.9849051256406,1222.9924525628203,611.4962262814101,
				305.74811314070485,152.87405657035254,76.43702828517625,
				38.218514142588134,19.109257071294063,9.554628535647034,
				4.777314267823517,2.3886571339117584,1.1943285669558792,
				0.5971642834779396,0.29858214173896974,0.14929107086948493,
				0.07464553543474241],
			matrixIds:["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19"]
		},
		{	
			type:"OSM",
			name:"Osm",
			url:"", 
			layer:""
		},
		{	
			type:"WMS",
			name:"Tours_2008_2010",
			url:"http://wms.openstreetmap.fr/wms?request=GetMap&service=WMS&version1.1.1", 
			layer:"Tours"
		},
		{	
			type:"WMS",
			name:"Tours_2013",
			url:"http://wms.openstreetmap.fr/wms?request=GetMap&service=WMS&version1.1.1", 
			layer:"tours_2013"
		}
		,
	];

