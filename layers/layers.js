var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ADMINISTRASIDESA_AR_25K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_1 = format_ADMINISTRASIDESA_AR_25K_1.readFeatures(json_ADMINISTRASIDESA_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_1.addFeatures(features_ADMINISTRASIDESA_AR_25K_1);
var lyr_ADMINISTRASIDESA_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_1, 
                style: style_ADMINISTRASIDESA_AR_25K_1,
                popuplayertitle: 'ADMINISTRASIDESA_AR_25K',
                interactive: true,
    title: 'ADMINISTRASIDESA_AR_25K<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_0.png" /> GARUM<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_1.png" /> KANIGORO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_2.png" /> KEPANJEN KIDUL<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_3.png" /> NGLEGOK<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_4.png" /> SANAN KULON<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_5.png" /> SANAN WETAN<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_6.png" /> SUKOREJO<br />\
    <img src="styles/legend/ADMINISTRASIDESA_AR_25K_1_7.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ADMINISTRASIDESA_AR_25K_1];
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_1.set('fieldLabels', {'KDPPUM': 'inline label - visible with data', 'NAMOBJ': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', 'KDPBPS': 'inline label - visible with data', 'FCODE': 'inline label - visible with data', 'LUASWH': 'header label - visible with data', 'UUPP': 'header label - visible with data', 'SRS_ID': 'header label - visible with data', 'LCODE': 'header label - visible with data', 'METADATA': 'header label - visible with data', 'KDEBPS': 'header label - visible with data', 'KDEPUM': 'header label - visible with data', 'KDCBPS': 'header label - visible with data', 'KDCPUM': 'header label - visible with data', 'KDBBPS': 'header label - visible with data', 'KDBPUM': 'header label - visible with data', 'WADMKD': 'header label - visible with data', 'WIADKD': 'header label - visible with data', 'WADMKC': 'header label - visible with data', 'WIADKC': 'header label - visible with data', 'WADMKK': 'header label - visible with data', 'WIADKK': 'inline label - always visible', 'WADMPR': 'header label - visible with data', 'WIADPR': 'header label - visible with data', 'TIPADM': 'header label - visible with data', 'SHAPE_Leng': 'header label - visible with data', 'SHAPE_Area': 'header label - visible with data', });
lyr_ADMINISTRASIDESA_AR_25K_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});