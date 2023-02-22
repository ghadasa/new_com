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
var format_sevice_1 = new ol.format.GeoJSON();
var features_sevice_1 = format_sevice_1.readFeatures(json_sevice_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sevice_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sevice_1.addFeatures(features_sevice_1);
var lyr_sevice_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sevice_1, 
                style: style_sevice_1,
                interactive: true,
                title: '<img src="styles/legend/sevice_1.png" /> sevice'
            });
var format_compound_2 = new ol.format.GeoJSON();
var features_compound_2 = format_compound_2.readFeatures(json_compound_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_compound_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_compound_2.addFeatures(features_compound_2);
var lyr_compound_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_compound_2, 
                style: style_compound_2,
                interactive: true,
    title: 'compound<br />\
    <img src="styles/legend/compound_2_0.png" /> Available<br />\
    <img src="styles/legend/compound_2_1.png" /> Not Available<br />\
    <img src="styles/legend/compound_2_2.png" /> <br />\
    <img src="styles/legend/compound_2_3.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_sevice_1.setVisible(true);lyr_compound_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_sevice_1,lyr_compound_2];
lyr_sevice_1.set('fieldAliases', {'Mall_Name': 'Mall_Name', 'Company_Na': 'Company_Na', 'Land_Use': 'Land_Use', 'Building_N': 'Building_N', });
lyr_compound_2.set('fieldAliases', {'Area_Acres': 'Area_Acres', 'Land_Name': 'Land_Name', 'Area_Name': 'Area_Name', 'Company_Na': 'Company_Na', 'Compound_N': 'Compound_N', 'Arae': 'Arae', 'Area_Unit': 'Area_Unit', 'Building_n': 'Building_n', 'Unit_No_Fl': 'Unit_No_Fl', 'Price_Mete': 'Price_Mete', 'Counsultan': 'Counsultan', 'Parking_Pr': 'Parking_Pr', 'Club_House': 'Club_House', 'Maintance_': 'Maintance_', 'Delivery_D': 'Delivery_D', 'Delivery_T': 'Delivery_T', 'Desiner_Na': 'Desiner_Na', 'نسبة__': 'نسبة__', 'نسبة_': 'نسبة_', 'Land_Ava': 'Land_Ava', });
lyr_sevice_1.set('fieldImages', {'Mall_Name': '', 'Company_Na': '', 'Land_Use': '', 'Building_N': '', });
lyr_compound_2.set('fieldImages', {'Area_Acres': '', 'Land_Name': '', 'Area_Name': '', 'Company_Na': '', 'Compound_N': '', 'Arae': '', 'Area_Unit': '', 'Building_n': '', 'Unit_No_Fl': '', 'Price_Mete': '', 'Counsultan': '', 'Parking_Pr': '', 'Club_House': '', 'Maintance_': '', 'Delivery_D': '', 'Delivery_T': '', 'Desiner_Na': '', 'نسبة__': '', 'نسبة_': '', 'Land_Ava': '', });
lyr_sevice_1.set('fieldLabels', {'Mall_Name': 'no label', 'Company_Na': 'no label', 'Land_Use': 'no label', 'Building_N': 'no label', });
lyr_compound_2.set('fieldLabels', {'Area_Acres': 'inline label', 'Land_Name': 'inline label', 'Area_Name': 'inline label', 'Company_Na': 'inline label', 'Compound_N': 'inline label', 'Arae': 'inline label', 'Area_Unit': 'inline label', 'Building_n': 'inline label', 'Unit_No_Fl': 'inline label', 'Price_Mete': 'inline label', 'Counsultan': 'inline label', 'Parking_Pr': 'inline label', 'Club_House': 'inline label', 'Maintance_': 'inline label', 'Delivery_D': 'inline label', 'Delivery_T': 'inline label', 'Desiner_Na': 'inline label', 'نسبة__': 'header label', 'نسبة_': 'inline label', 'Land_Ava': 'inline label', });
lyr_compound_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});