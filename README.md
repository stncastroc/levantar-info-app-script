# Levantamiento de Informacion - Apps Script

Aplicacion web demo para levantar informacion comercial generica con formulario validado, tabla editable, carga masiva desde Google Sheets/CSV/XLSX y dashboard interactivo.

## Acceso a la APP
Pruebe la App en el siguiente enlace: [App Levantamiento de Información con App Script](https://script.google.com/macros/s/AKfycbweYbyCUQ-BuVedmXUXbTlFnJtRDPiXj6kEpTMwSRDJhnCNFCkYc21YiTIFAXJTvTYG8g/exec)

## Archivos

- `appsscript.json`: manifest del proyecto.
- `Code.gs`: backend Apps Script, persistencia en Google Sheets, validaciones e importacion.
- `Index.html`: interfaz principal, tabla, carga masiva y dashboard.

## Plantilla de importacion

La aplicacion genera una plantilla CSV desde el boton `Descargar plantilla`.
Encabezados esperados:

```csv
Nombre Cliente,Direccion,Region,Comuna,Telefono,Email,Detalle Compra,Monto,Cantidad
```

## Notas
- La primera ejecucion crea una Google Sheet llamada `Levantamiento Informacion - Base Demo`.
- El ID de la hoja queda guardado en `PropertiesService`.
- `Precio Total` se calcula automaticamente como `Monto * Cantidad`.
- La importacion desde Excel se procesa en el navegador usando SheetJS por CDN.
