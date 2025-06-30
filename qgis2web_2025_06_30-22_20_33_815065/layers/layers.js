var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_pharmasii_1 = new ol.format.GeoJSON();
var features_pharmasii_1 = format_pharmasii_1.readFeatures(json_pharmasii_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pharmasii_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pharmasii_1.addFeatures(features_pharmasii_1);
var lyr_pharmasii_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pharmasii_1, 
                style: style_pharmasii_1,
                popuplayertitle: 'pharmasii',
                interactive: true,
                title: '<img src="styles/legend/pharmasii_1.png" /> pharmasii'
            });
var format_kenera_2 = new ol.format.GeoJSON();
var features_kenera_2 = format_kenera_2.readFeatures(json_kenera_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kenera_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kenera_2.addFeatures(features_kenera_2);
var lyr_kenera_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kenera_2, 
                style: style_kenera_2,
                popuplayertitle: 'kenera',
                interactive: true,
                title: '<img src="styles/legend/kenera_2.png" /> kenera'
            });
var format_limitekemi_3 = new ol.format.GeoJSON();
var features_limitekemi_3 = format_limitekemi_3.readFeatures(json_limitekemi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limitekemi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limitekemi_3.addFeatures(features_limitekemi_3);
var lyr_limitekemi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_limitekemi_3, 
                style: style_limitekemi_3,
                popuplayertitle: 'limite kemi',
                interactive: true,
                title: '<img src="styles/legend/limitekemi_3.png" /> limite kemi'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_pharmasii_1.setVisible(true);lyr_kenera_2.setVisible(true);lyr_limitekemi_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_pharmasii_1,lyr_kenera_2,lyr_limitekemi_3];
lyr_pharmasii_1.set('fieldAliases', {'fclass': 'fclass', 'name': 'name', });
lyr_kenera_2.set('fieldAliases', {'Nom_Commun': 'Nom_Commun', });
lyr_limitekemi_3.set('fieldAliases', {'Nom_Commun': 'Nom_Commun', });
lyr_pharmasii_1.set('fieldImages', {'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_kenera_2.set('fieldImages', {'Nom_Commun': 'TextEdit', });
lyr_limitekemi_3.set('fieldImages', {'Nom_Commun': 'TextEdit', });
lyr_pharmasii_1.set('fieldLabels', {'fclass': 'no label', 'name': 'no label', });
lyr_kenera_2.set('fieldLabels', {'Nom_Commun': 'no label', });
lyr_limitekemi_3.set('fieldLabels', {'Nom_Commun': 'no label', });
lyr_limitekemi_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});