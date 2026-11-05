var wms_layers = [];

var format_Bharathapuzha_0 = new ol.format.GeoJSON();
var features_Bharathapuzha_0 = format_Bharathapuzha_0.readFeatures(json_Bharathapuzha_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bharathapuzha_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bharathapuzha_0.addFeatures(features_Bharathapuzha_0);
var lyr_Bharathapuzha_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bharathapuzha_0, 
                style: style_Bharathapuzha_0,
                popuplayertitle: 'Bharathapuzha',
                interactive: false,
                title: '<img src="styles/legend/Bharathapuzha_0.png" /> Bharathapuzha'
            });
var format_DR_1 = new ol.format.GeoJSON();
var features_DR_1 = format_DR_1.readFeatures(json_DR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DR_1.addFeatures(features_DR_1);
var lyr_DR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DR_1, 
                style: style_DR_1,
                popuplayertitle: ' DR',
                interactive: false,
                title: '<img src="styles/legend/DR_1.png" />  DR'
            });

lyr_Bharathapuzha_0.setVisible(true);lyr_DR_1.setVisible(true);
var layersList = [lyr_Bharathapuzha_0,lyr_DR_1];
lyr_Bharathapuzha_0.set('fieldAliases', {'PERIMETER': 'PERIMETER', 'KERWSDRP_': 'KERWSDRP_', 'KERWSDRP_I': 'KERWSDRP_I', 'WSCODE': 'WSCODE', 'WSCODE1': 'WSCODE1', 'NRIS': 'NRIS', 'WSNAME': 'WSNAME', 'AREA': 'AREA', });
lyr_DR_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ORDER1': 'ORDER1', 'Shape_Leng': 'Shape_Leng', 'LENGTH': 'LENGTH', });
lyr_Bharathapuzha_0.set('fieldImages', {'PERIMETER': '', 'KERWSDRP_': '', 'KERWSDRP_I': '', 'WSCODE': '', 'WSCODE1': '', 'NRIS': '', 'WSNAME': '', 'AREA': '', });
lyr_DR_1.set('fieldImages', {'OBJECTID': '', 'ORDER1': '', 'Shape_Leng': '', 'LENGTH': '', });
lyr_Bharathapuzha_0.set('fieldLabels', {'PERIMETER': 'no label', 'KERWSDRP_': 'no label', 'KERWSDRP_I': 'no label', 'WSCODE': 'no label', 'WSCODE1': 'no label', 'NRIS': 'no label', 'WSNAME': 'no label', 'AREA': 'no label', });
lyr_DR_1.set('fieldLabels', {'OBJECTID': 'no label', 'ORDER1': 'no label', 'Shape_Leng': 'no label', 'LENGTH': 'no label', });
lyr_DR_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});