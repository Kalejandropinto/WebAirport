ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3116").setExtent([1036252.104077, 1070556.336491, 1187275.707170, 1192427.124658]);
var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_Ecosistemas_Otanche_1 = new ol.format.GeoJSON();
var features_Ecosistemas_Otanche_1 = format_Ecosistemas_Otanche_1.readFeatures(json_Ecosistemas_Otanche_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3116'});
var jsonSource_Ecosistemas_Otanche_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ecosistemas_Otanche_1.addFeatures(features_Ecosistemas_Otanche_1);
var lyr_Ecosistemas_Otanche_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ecosistemas_Otanche_1, 
                style: style_Ecosistemas_Otanche_1,
                interactive: true,
    title: 'Ecosistemas_Otanche<br />\
    <img src="styles/legend/Ecosistemas_Otanche_1_0.png" /> Agroecosistemas campesinos mixtos<br />\
    <img src="styles/legend/Ecosistemas_Otanche_1_1.png" /> Agroecosistemas Lecheros<br />\
    <img src="styles/legend/Ecosistemas_Otanche_1_2.png" /> Areas rurales intervenidas<br />\
    <img src="styles/legend/Ecosistemas_Otanche_1_3.png" /> BMD Andinos y Alto-andinos de Roble<br />\
    <img src="styles/legend/Ecosistemas_Otanche_1_4.png" /> BMD Húmedos Andinos<br />\
    <img src="styles/legend/Ecosistemas_Otanche_1_5.png" /> <br />'
        });
var format_Construcciones_Otanche_2 = new ol.format.GeoJSON();
var features_Construcciones_Otanche_2 = format_Construcciones_Otanche_2.readFeatures(json_Construcciones_Otanche_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3116'});
var jsonSource_Construcciones_Otanche_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Construcciones_Otanche_2.addFeatures(features_Construcciones_Otanche_2);
var lyr_Construcciones_Otanche_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Construcciones_Otanche_2, 
                style: style_Construcciones_Otanche_2,
                interactive: true,
                title: '<img src="styles/legend/Construcciones_Otanche_2.png" /> Construcciones_Otanche'
            });
var format_Vas_Otanche_3 = new ol.format.GeoJSON();
var features_Vas_Otanche_3 = format_Vas_Otanche_3.readFeatures(json_Vas_Otanche_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3116'});
var jsonSource_Vas_Otanche_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vas_Otanche_3.addFeatures(features_Vas_Otanche_3);
var lyr_Vas_Otanche_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vas_Otanche_3, 
                style: style_Vas_Otanche_3,
                interactive: true,
                title: '<img src="styles/legend/Vas_Otanche_3.png" /> Vías_Otanche'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_Ecosistemas_Otanche_1.setVisible(true);lyr_Construcciones_Otanche_2.setVisible(true);lyr_Vas_Otanche_3.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_Ecosistemas_Otanche_1,lyr_Construcciones_Otanche_2,lyr_Vas_Otanche_3];
lyr_Ecosistemas_Otanche_1.set('fieldAliases', {'ID_ESPACIA': 'ID_ESPACIA', 'AREA_OFICI': 'AREA_OFICI', 'ENTIDAD_TE': 'ENTIDAD_TE', 'NOM_DEPART': 'NOM_DEPART', 'NOM_MUNICI': 'NOM_MUNICI', 'COD_DEPTO': 'COD_DEPTO', 'COD_DANE': 'COD_DANE', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'VEGETACION': 'VEGETACION', 'USOS_EXTRA': 'USOS_EXTRA', 'AGROECOSIS': 'AGROECOSIS', 'CODIGO': 'CODIGO', 'TIPO_BIOMA': 'TIPO_BIOMA', 'BIOMA': 'BIOMA', 'ECOSISTEMA': 'ECOSISTEMA', });
lyr_Construcciones_Otanche_2.set('fieldAliases', {'codigo': 'codigo', 'terreno_co': 'terreno_co', 'tipo_const': 'tipo_const', 'tipo_domin': 'tipo_domin', 'numero_pis': 'numero_pis', 'numero_sot': 'numero_sot', 'numero_mez': 'numero_mez', 'numero_sem': 'numero_sem', 'codigo_ant': 'codigo_ant', 'ID_ESPACIA': 'ID_ESPACIA', 'AREA_OFICI': 'AREA_OFICI', 'ENTIDAD_TE': 'ENTIDAD_TE', 'NOM_DEPART': 'NOM_DEPART', 'NOM_MUNICI': 'NOM_MUNICI', 'COD_DEPTO': 'COD_DEPTO', 'COD_DANE': 'COD_DANE', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_Vas_Otanche_3.set('fieldAliases', {'FID_VIA': 'FID_VIA', 'OBJECTID': 'OBJECTID', 'TIPO_VIA': 'TIPO_VIA', 'ESTADO_SUP': 'ESTADO_SUP', 'NUMERO_CAR': 'NUMERO_CAR', 'ACCESIBILI': 'ACCESIBILI', 'NOMBRE_GEO': 'NOMBRE_GEO', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'RULEID': 'RULEID', 'PK_CUE': 'PK_CUE', 'EJE_VIAL': 'EJE_VIAL', 'SHAPE_LENG': 'SHAPE_LENG', 'GLOBALID': 'GLOBALID', 'Shape_Le_1': 'Shape_Le_1', 'FID_OTANCH': 'FID_OTANCH', 'ID_ESPACIA': 'ID_ESPACIA', 'AREA_OFICI': 'AREA_OFICI', 'ENTIDAD_TE': 'ENTIDAD_TE', 'NOM_DEPART': 'NOM_DEPART', 'NOM_MUNICI': 'NOM_MUNICI', 'COD_DEPTO': 'COD_DEPTO', 'COD_DANE': 'COD_DANE', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_Ecosistemas_Otanche_1.set('fieldImages', {'ID_ESPACIA': 'Hidden', 'AREA_OFICI': 'Hidden', 'ENTIDAD_TE': 'Hidden', 'NOM_DEPART': 'Hidden', 'NOM_MUNICI': 'Hidden', 'COD_DEPTO': 'Hidden', 'COD_DANE': 'Hidden', 'SHAPE_AREA': 'Hidden', 'SHAPE_LEN': 'Hidden', 'AREA': 'Hidden', 'PERIMETER': 'Hidden', 'VEGETACION': 'Hidden', 'USOS_EXTRA': 'Hidden', 'AGROECOSIS': 'Hidden', 'CODIGO': 'Hidden', 'TIPO_BIOMA': 'Hidden', 'BIOMA': 'Hidden', 'ECOSISTEMA': 'TextEdit', });
lyr_Construcciones_Otanche_2.set('fieldImages', {'codigo': 'Hidden', 'terreno_co': 'Hidden', 'tipo_const': 'Hidden', 'tipo_domin': 'Hidden', 'numero_pis': 'Hidden', 'numero_sot': 'Hidden', 'numero_mez': 'Hidden', 'numero_sem': 'Hidden', 'codigo_ant': 'Hidden', 'ID_ESPACIA': 'Hidden', 'AREA_OFICI': 'Hidden', 'ENTIDAD_TE': 'Hidden', 'NOM_DEPART': 'Hidden', 'NOM_MUNICI': 'Hidden', 'COD_DEPTO': 'Hidden', 'COD_DANE': 'Hidden', 'SHAPE_AREA': 'Hidden', 'SHAPE_LEN': 'Hidden', });
lyr_Vas_Otanche_3.set('fieldImages', {'FID_VIA': 'Hidden', 'OBJECTID': 'Hidden', 'TIPO_VIA': 'TextEdit', 'ESTADO_SUP': 'Hidden', 'NUMERO_CAR': 'Hidden', 'ACCESIBILI': 'Hidden', 'NOMBRE_GEO': 'Hidden', 'PROYECTO': 'Hidden', 'SYMBOL': 'Hidden', 'FECHA': 'Hidden', 'RULEID': 'Hidden', 'PK_CUE': 'Hidden', 'EJE_VIAL': 'Hidden', 'SHAPE_LENG': 'Hidden', 'GLOBALID': 'Hidden', 'Shape_Le_1': 'Hidden', 'FID_OTANCH': 'Hidden', 'ID_ESPACIA': 'Hidden', 'AREA_OFICI': 'Hidden', 'ENTIDAD_TE': 'Hidden', 'NOM_DEPART': 'Hidden', 'NOM_MUNICI': 'Hidden', 'COD_DEPTO': 'Hidden', 'COD_DANE': 'Hidden', 'SHAPE_AREA': 'Hidden', 'SHAPE_LEN': 'Hidden', });
lyr_Ecosistemas_Otanche_1.set('fieldLabels', {'ECOSISTEMA': 'inline label', });
lyr_Construcciones_Otanche_2.set('fieldLabels', {});
lyr_Vas_Otanche_3.set('fieldLabels', {'TIPO_VIA': 'inline label', });
lyr_Vas_Otanche_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});