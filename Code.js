var APP_CONFIG = {
  spreadsheetProperty: 'LEVANTAR_INFO_SPREADSHEET_ID',
  spreadsheetName: 'Levantamiento Informacion - Base Demo',
  sheetName: 'Datos',
  headers: [
    'Id',
    'Fecha Registro',
    'Nombre Cliente',
    'Direccion',
    'Region',
    'Comuna',
    'Telefono',
    'Email',
    'Detalle Compra',
    'Monto',
    'Cantidad',
    'Precio Total'
  ],
  importHeaders: [
    'Nombre Cliente',
    'Direccion',
    'Region',
    'Comuna',
    'Telefono',
    'Email',
    'Detalle Compra',
    'Monto',
    'Cantidad'
  ]
};

var CHILE_REGIONS = {
  'Arica y Parinacota': ['Arica', 'Camarones', 'Putre', 'General Lagos'],
  'Tarapaca': ['Iquique', 'Alto Hospicio', 'Pozo Almonte', 'Camiña', 'Colchane', 'Huara', 'Pica'],
  'Antofagasta': ['Antofagasta', 'Mejillones', 'Sierra Gorda', 'Taltal', 'Calama', 'Ollague', 'San Pedro de Atacama', 'Tocopilla', 'Maria Elena'],
  'Atacama': ['Copiapo', 'Caldera', 'Tierra Amarilla', 'Chañaral', 'Diego de Almagro', 'Vallenar', 'Alto del Carmen', 'Freirina', 'Huasco'],
  'Coquimbo': ['La Serena', 'Coquimbo', 'Andacollo', 'La Higuera', 'Paiguano', 'Vicuña', 'Illapel', 'Canela', 'Los Vilos', 'Salamanca', 'Ovalle', 'Combarbala', 'Monte Patria', 'Punitaqui', 'Rio Hurtado'],
  'Valparaiso': ['Valparaiso', 'Casablanca', 'Concon', 'Juan Fernandez', 'Puchuncavi', 'Quintero', 'Viña del Mar', 'Isla de Pascua', 'Los Andes', 'Calle Larga', 'Rinconada', 'San Esteban', 'La Ligua', 'Cabildo', 'Papudo', 'Petorca', 'Zapallar', 'Quillota', 'Calera', 'Hijuelas', 'La Cruz', 'Nogales', 'San Antonio', 'Algarrobo', 'Cartagena', 'El Quisco', 'El Tabo', 'Santo Domingo', 'San Felipe', 'Catemu', 'Llaillay', 'Panquehue', 'Putaendo', 'Santa Maria', 'Quilpue', 'Limache', 'Olmue', 'Villa Alemana'],
  'Metropolitana de Santiago': ['Santiago', 'Cerrillos', 'Cerro Navia', 'Conchali', 'El Bosque', 'Estacion Central', 'Huechuraba', 'Independencia', 'La Cisterna', 'La Florida', 'La Granja', 'La Pintana', 'La Reina', 'Las Condes', 'Lo Barnechea', 'Lo Espejo', 'Lo Prado', 'Macul', 'Maipu', 'Ñuñoa', 'Pedro Aguirre Cerda', 'Peñalolen', 'Providencia', 'Pudahuel', 'Quilicura', 'Quinta Normal', 'Recoleta', 'Renca', 'San Joaquin', 'San Miguel', 'San Ramon', 'Vitacura', 'Puente Alto', 'Pirque', 'San Jose de Maipo', 'Colina', 'Lampa', 'Tiltil', 'San Bernardo', 'Buin', 'Calera de Tango', 'Paine', 'Melipilla', 'Alhue', 'Curacavi', 'Maria Pinto', 'San Pedro', 'Talagante', 'El Monte', 'Isla de Maipo', 'Padre Hurtado', 'Peñaflor'],
  'O Higgins': ['Rancagua', 'Codegua', 'Coinco', 'Coltauco', 'Doñihue', 'Graneros', 'Las Cabras', 'Machali', 'Malloa', 'Mostazal', 'Olivar', 'Peumo', 'Pichidegua', 'Quinta de Tilcoco', 'Rengo', 'Requinoa', 'San Vicente', 'Pichilemu', 'La Estrella', 'Litueche', 'Marchigue', 'Navidad', 'Paredones', 'San Fernando', 'Chepica', 'Chimbarongo', 'Lolol', 'Nancagua', 'Palmilla', 'Peralillo', 'Placilla', 'Pumanque', 'Santa Cruz'],
  'Maule': ['Talca', 'Constitucion', 'Curepto', 'Empedrado', 'Maule', 'Pelarco', 'Pencahue', 'Rio Claro', 'San Clemente', 'San Rafael', 'Cauquenes', 'Chanco', 'Pelluhue', 'Curico', 'Hualañe', 'Licanten', 'Molina', 'Rauco', 'Romeral', 'Sagrada Familia', 'Teno', 'Vichuquen', 'Linares', 'Colbun', 'Longavi', 'Parral', 'Retiro', 'San Javier', 'Villa Alegre', 'Yerbas Buenas'],
  'Ñuble': ['Chillan', 'Bulnes', 'Chillan Viejo', 'Cobquecura', 'Coelemu', 'Coihueco', 'El Carmen', 'Ninhue', 'Ñiquen', 'Pemuco', 'Pinto', 'Portezuelo', 'Quillon', 'Quirihue', 'Ranquil', 'San Carlos', 'San Fabian', 'San Ignacio', 'San Nicolas', 'Treguaco', 'Yungay'],
  'Biobio': ['Concepcion', 'Coronel', 'Chiguayante', 'Florida', 'Hualqui', 'Lota', 'Penco', 'San Pedro de la Paz', 'Santa Juana', 'Talcahuano', 'Tome', 'Hualpen', 'Lebu', 'Arauco', 'Cañete', 'Contulmo', 'Curanilahue', 'Los Alamos', 'Tirua', 'Los Angeles', 'Antuco', 'Cabrero', 'Laja', 'Mulchen', 'Nacimiento', 'Negrete', 'Quilaco', 'Quilleco', 'San Rosendo', 'Santa Barbara', 'Tucapel', 'Yumbel', 'Alto Biobio'],
  'La Araucania': ['Temuco', 'Carahue', 'Cunco', 'Curarrehue', 'Freire', 'Galvarino', 'Gorbea', 'Lautaro', 'Loncoche', 'Melipeuco', 'Nueva Imperial', 'Padre Las Casas', 'Perquenco', 'Pitrufquen', 'Pucon', 'Saavedra', 'Teodoro Schmidt', 'Tolten', 'Vilcun', 'Villarrica', 'Cholchol', 'Angol', 'Collipulli', 'Curacautin', 'Ercilla', 'Lonquimay', 'Los Sauces', 'Lumaco', 'Puren', 'Renaico', 'Traiguen', 'Victoria'],
  'Los Rios': ['Valdivia', 'Corral', 'Lanco', 'Los Lagos', 'Mafil', 'Mariquina', 'Paillaco', 'Panguipulli', 'La Union', 'Futrono', 'Lago Ranco', 'Rio Bueno'],
  'Los Lagos': ['Puerto Montt', 'Calbuco', 'Cochamo', 'Fresia', 'Frutillar', 'Los Muermos', 'Llanquihue', 'Maullin', 'Puerto Varas', 'Castro', 'Ancud', 'Chonchi', 'Curaco de Velez', 'Dalcahue', 'Puqueldon', 'Queilen', 'Quellon', 'Quemchi', 'Quinchao', 'Osorno', 'Puerto Octay', 'Purranque', 'Puyehue', 'Rio Negro', 'San Juan de la Costa', 'San Pablo', 'Chaiten', 'Futaleufu', 'Hualaihue', 'Palena'],
  'Aysen': ['Coyhaique', 'Lago Verde', 'Aysen', 'Cisnes', 'Guaitecas', 'Cochrane', 'O Higgins', 'Tortel', 'Chile Chico', 'Rio Ibanez'],
  'Magallanes': ['Punta Arenas', 'Laguna Blanca', 'Rio Verde', 'San Gregorio', 'Cabo de Hornos', 'Antartica', 'Porvenir', 'Primavera', 'Timaukel', 'Natales', 'Torres del Paine']
};

function doGet() {
  ensureDataSheet_();
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Levantamiento de Informacion')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getInitialData() {
  return {
    records: getRecords(),
    regions: getRegions(),
    templateHeaders: APP_CONFIG.importHeaders,
    spreadsheetId: getSpreadsheet_().getId()
  };
}

function getRegions() {
  return Object.keys(CHILE_REGIONS).map(function(name) {
    return {
      name: name,
      communes: CHILE_REGIONS[name]
    };
  });
}

function getRecords() {
  var sheet = ensureDataSheet_();
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) {
    return [];
  }

  var values = sheet.getRange(2, 1, lastRow - 1, APP_CONFIG.headers.length).getValues();
  return values
    .filter(function(row) {
      return row[0];
    })
    .map(rowToRecord_);
}

function addRecord(input) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    var sheet = ensureDataSheet_();
    var result = validateRecord_(input);
    if (!result.valid) {
      return { success: false, errors: result.errors };
    }

    var row = recordToRow_(result.record, Utilities.getUuid(), new Date());
    sheet.appendRow(row);
    return { success: true, record: rowToRecord_(row), records: getRecords() };
  } finally {
    lock.releaseLock();
  }
}

function updateRecord(id, input) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    var sheet = ensureDataSheet_();
    var rowNumber = findRowById_(sheet, id);
    if (!rowNumber) {
      return { success: false, errors: ['No se encontro el registro para editar.'] };
    }

    var result = validateRecord_(input);
    if (!result.valid) {
      return { success: false, errors: result.errors };
    }

    var currentDate = sheet.getRange(rowNumber, 2).getValue() || new Date();
    var row = recordToRow_(result.record, id, currentDate);
    sheet.getRange(rowNumber, 1, 1, APP_CONFIG.headers.length).setValues([row]);
    return { success: true, record: rowToRecord_(row), records: getRecords() };
  } finally {
    lock.releaseLock();
  }
}

function deleteRecord(id) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    var sheet = ensureDataSheet_();
    var rowNumber = findRowById_(sheet, id);
    if (!rowNumber) {
      return { success: false, errors: ['No se encontro el registro para eliminar.'] };
    }

    sheet.deleteRow(rowNumber);
    return { success: true, records: getRecords() };
  } finally {
    lock.releaseLock();
  }
}

function importFromGoogleSheet(source) {
  if (!source) {
    return { success: false, imported: 0, rejected: [{ row: 0, errors: ['Ingresa una URL o ID de Google Sheet.'] }], records: getRecords() };
  }

  var spreadsheetId = extractSpreadsheetId_(source);
  if (!spreadsheetId) {
    return { success: false, imported: 0, rejected: [{ row: 0, errors: ['No se pudo reconocer el ID de Google Sheet.'] }], records: getRecords() };
  }

  try {
    var external = SpreadsheetApp.openById(spreadsheetId);
    var sheet = external.getSheetByName(APP_CONFIG.sheetName) || external.getSheets()[0];
    var values = sheet.getDataRange().getValues();
    var rows = valuesToObjects_(values);
    return importRows(rows);
  } catch (error) {
    return { success: false, imported: 0, rejected: [{ row: 0, errors: ['No se pudo leer el Google Sheet: ' + error.message] }], records: getRecords() };
  }
}

function importRows(rows) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    var sheet = ensureDataSheet_();
    var importedRows = [];
    var rejected = [];

    if (!rows || !rows.length) {
      return { success: false, imported: 0, rejected: [{ row: 0, errors: ['No hay filas para importar.'] }], records: getRecords() };
    }

    rows.forEach(function(row, index) {
      if (isBlankImportRow_(row)) {
        return;
      }

      var normalized = normalizeImportRow_(row);
      var result = validateRecord_(normalized);
      if (result.valid) {
        importedRows.push(recordToRow_(result.record, Utilities.getUuid(), new Date()));
      } else {
        rejected.push({ row: index + 2, errors: result.errors });
      }
    });

    if (importedRows.length) {
      sheet.getRange(sheet.getLastRow() + 1, 1, importedRows.length, APP_CONFIG.headers.length).setValues(importedRows);
    }

    return {
      success: importedRows.length > 0,
      imported: importedRows.length,
      rejected: rejected,
      records: getRecords()
    };
  } finally {
    lock.releaseLock();
  }
}

function getTemplateCsv() {
  return APP_CONFIG.importHeaders.join(',') + '\n';
}

function ensureDataSheet_() {
  var spreadsheet = getSpreadsheet_();
  var sheet = spreadsheet.getSheetByName(APP_CONFIG.sheetName);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(APP_CONFIG.sheetName);
  }

  var existingHeaders = [];
  if (sheet.getLastRow() > 0) {
    existingHeaders = sheet.getRange(1, 1, 1, APP_CONFIG.headers.length).getValues()[0];
  }

  if (!headersMatch_(existingHeaders, APP_CONFIG.headers)) {
    sheet.getRange(1, 1, 1, APP_CONFIG.headers.length).setValues([APP_CONFIG.headers]);
  }

  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, APP_CONFIG.headers.length).setFontWeight('bold').setBackground('#eef2f7');
  sheet.autoResizeColumns(1, APP_CONFIG.headers.length);
  return sheet;
}

function getSpreadsheet_() {
  var properties = PropertiesService.getScriptProperties();
  var spreadsheetId = properties.getProperty(APP_CONFIG.spreadsheetProperty);
  if (spreadsheetId) {
    try {
      return SpreadsheetApp.openById(spreadsheetId);
    } catch (error) {
      properties.deleteProperty(APP_CONFIG.spreadsheetProperty);
    }
  }

  var spreadsheet = SpreadsheetApp.create(APP_CONFIG.spreadsheetName);
  properties.setProperty(APP_CONFIG.spreadsheetProperty, spreadsheet.getId());
  return spreadsheet;
}

function validateRecord_(input) {
  var errors = [];
  var record = {
    nombreCliente: cleanText_(input && (input.nombreCliente || input['Nombre Cliente'])),
    direccion: cleanText_(input && (input.direccion || input.Direccion)),
    region: cleanText_(input && (input.region || input.Region)),
    comuna: cleanText_(input && (input.comuna || input.Comuna)),
    telefono: cleanText_(input && (input.telefono || input.Telefono)),
    email: cleanText_(input && (input.email || input.Email)),
    detalleCompra: cleanText_(input && (input.detalleCompra || input['Detalle Compra'])),
    monto: parseAmount_(input && (input.monto || input.Monto)),
    cantidad: parseAmount_(input && (input.cantidad || input.Cantidad))
  };

  if (!record.nombreCliente) errors.push('Nombre Cliente es obligatorio.');
  if (!record.region) errors.push('Region es obligatoria.');
  if (!record.comuna) errors.push('Comuna es obligatoria.');
  if (!record.email) errors.push('Email es obligatorio.');
  if (!record.detalleCompra) errors.push('Detalle Compra es obligatorio.');
  if (!isFinite(record.monto) || record.monto <= 0) errors.push('Monto debe ser un numero positivo.');
  if (!isFinite(record.cantidad) || record.cantidad <= 0) errors.push('Cantidad debe ser un numero positivo.');

  if (record.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(record.email)) {
    errors.push('Email no tiene un formato valido.');
  }

  if (record.telefono) {
    var digits = record.telefono.replace(/\D/g, '');
    if (!/^\+?[\d\s()\-]{8,20}$/.test(record.telefono) || digits.length < 8 || digits.length > 12) {
      errors.push('Telefono debe tener un formato valido para Chile.');
    }
  }

  if (record.region && !CHILE_REGIONS[record.region]) {
    errors.push('Region no esta dentro del listado permitido.');
  } else if (record.region && record.comuna && CHILE_REGIONS[record.region].indexOf(record.comuna) === -1) {
    errors.push('Comuna no corresponde a la region seleccionada.');
  }

  record.precioTotal = roundCurrency_(record.monto * record.cantidad);
  return { valid: errors.length === 0, errors: errors, record: record };
}

function recordToRow_(record, id, date) {
  return [
    id,
    date,
    record.nombreCliente,
    record.direccion,
    record.region,
    record.comuna,
    record.telefono,
    record.email,
    record.detalleCompra,
    record.monto,
    record.cantidad,
    record.precioTotal
  ];
}

function rowToRecord_(row) {
  return {
    id: row[0],
    fechaRegistro: toIsoDate_(row[1]),
    nombreCliente: row[2],
    direccion: row[3],
    region: row[4],
    comuna: row[5],
    telefono: row[6],
    email: row[7],
    detalleCompra: row[8],
    monto: Number(row[9]) || 0,
    cantidad: Number(row[10]) || 0,
    precioTotal: Number(row[11]) || 0
  };
}

function findRowById_(sheet, id) {
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) {
    return null;
  }

  var ids = sheet.getRange(2, 1, lastRow - 1, 1).getValues();
  for (var i = 0; i < ids.length; i++) {
    if (String(ids[i][0]) === String(id)) {
      return i + 2;
    }
  }
  return null;
}

function valuesToObjects_(values) {
  if (!values || values.length < 2) {
    return [];
  }

  var headers = values[0].map(function(value) {
    return cleanText_(value);
  });

  return values.slice(1).map(function(row) {
    var object = {};
    headers.forEach(function(header, index) {
      object[header] = row[index];
    });
    return object;
  });
}

function normalizeImportRow_(row) {
  var normalized = {};
  Object.keys(row || {}).forEach(function(key) {
    var cleanKey = normalizeKey_(key);
    var target = headerAliases_()[cleanKey];
    if (target) {
      normalized[target] = row[key];
    }
  });
  return normalized;
}

function headerAliases_() {
  return {
    nombrecliente: 'nombreCliente',
    cliente: 'nombreCliente',
    direccion: 'direccion',
    region: 'region',
    comuna: 'comuna',
    telefono: 'telefono',
    fono: 'telefono',
    email: 'email',
    correo: 'email',
    correoelectronico: 'email',
    detallecompra: 'detalleCompra',
    compra: 'detalleCompra',
    producto: 'detalleCompra',
    monto: 'monto',
    precio: 'monto',
    cantidad: 'cantidad'
  };
}

function isBlankImportRow_(row) {
  return Object.keys(row || {}).every(function(key) {
    return cleanText_(row[key]) === '';
  });
}

function extractSpreadsheetId_(source) {
  var text = String(source || '').trim();
  var match = text.match(/[-\w]{25,}/);
  return match ? match[0] : '';
}

function headersMatch_(actual, expected) {
  if (!actual || actual.length < expected.length) {
    return false;
  }

  return expected.every(function(header, index) {
    return String(actual[index] || '') === header;
  });
}

function cleanText_(value) {
  if (value === null || typeof value === 'undefined') {
    return '';
  }
  return String(value).trim();
}

function parseAmount_(value) {
  if (typeof value === 'number') {
    return value;
  }

  var text = cleanText_(value).replace(/\$/g, '').replace(/\s/g, '');
  if (!text) {
    return NaN;
  }

  if (text.indexOf(',') !== -1 && text.indexOf('.') !== -1) {
    text = text.replace(/\./g, '').replace(',', '.');
  } else if (text.indexOf(',') !== -1) {
    text = text.replace(',', '.');
  }

  text = text.replace(/[^0-9.\-]/g, '');
  return Number(text);
}

function roundCurrency_(value) {
  return Math.round((Number(value) || 0) * 100) / 100;
}

function normalizeKey_(value) {
  return cleanText_(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');
}

function toIsoDate_(value) {
  if (!value) {
    return '';
  }

  var date = Object.prototype.toString.call(value) === '[object Date]' ? value : new Date(value);
  if (isNaN(date.getTime())) {
    return '';
  }
  return Utilities.formatDate(date, Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm:ss');
}
