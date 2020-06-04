ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3035").setExtent([5076300.610075, 2536964.255033, 5305747.276976, 2642585.921808]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_antena_1 = new ol.format.GeoJSON();
var features_antena_1 = format_antena_1.readFeatures(json_antena_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3035'});
var jsonSource_antena_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_antena_1.addFeatures(features_antena_1);
var lyr_antena_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_antena_1, 
                style: style_antena_1,
                interactive: true,
                title: '<img src="styles/legend/antena_1.png" /> antena'
            });
var format_zona_de_interes_2 = new ol.format.GeoJSON();
var features_zona_de_interes_2 = format_zona_de_interes_2.readFeatures(json_zona_de_interes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3035'});
var jsonSource_zona_de_interes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zona_de_interes_2.addFeatures(features_zona_de_interes_2);
var lyr_zona_de_interes_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_zona_de_interes_2, 
                style: style_zona_de_interes_2,
                interactive: true,
                title: '<img src="styles/legend/zona_de_interes_2.png" /> zona_de_interes'
            });
var format_puncte_calcul_3 = new ol.format.GeoJSON();
var features_puncte_calcul_3 = format_puncte_calcul_3.readFeatures(json_puncte_calcul_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3035'});
var jsonSource_puncte_calcul_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puncte_calcul_3.addFeatures(features_puncte_calcul_3);
var lyr_puncte_calcul_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_puncte_calcul_3, 
                style: style_puncte_calcul_3,
                interactive: true,
                title: '<img src="styles/legend/puncte_calcul_3.png" /> puncte_calcul'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_antena_1.setVisible(true);lyr_zona_de_interes_2.setVisible(true);lyr_puncte_calcul_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_antena_1,lyr_zona_de_interes_2,lyr_puncte_calcul_3];
lyr_antena_1.set('fieldAliases', {'id': 'id', 'nume': 'nume', 'geom_polygon': 'geom_polygon', });
lyr_zona_de_interes_2.set('fieldAliases', {'id': 'id', 'nume': 'nume', 'geom': 'geom', });
lyr_puncte_calcul_3.set('fieldAliases', {'id': 'id', 'prx': 'PRX', 'dist_antena': 'Distanta de antena', });
lyr_antena_1.set('fieldImages', {'id': 'Range', 'nume': 'TextEdit', 'geom_polygon': 'TextEdit', });
lyr_zona_de_interes_2.set('fieldImages', {'id': 'TextEdit', 'nume': 'TextEdit', 'geom': 'TextEdit', });
lyr_puncte_calcul_3.set('fieldImages', {'id': 'Hidden', 'prx': 'TextEdit', 'dist_antena': 'TextEdit', });
lyr_antena_1.set('fieldLabels', {'id': 'no label', 'nume': 'no label', 'geom_polygon': 'no label', });
lyr_zona_de_interes_2.set('fieldLabels', {'id': 'no label', 'nume': 'no label', 'geom': 'no label', });
lyr_puncte_calcul_3.set('fieldLabels', {'prx': 'inline label', 'dist_antena': 'inline label', });
lyr_puncte_calcul_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});