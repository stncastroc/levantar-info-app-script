# Levantamiento de Informacion - Apps Script

Aplicacion web demo para levantar informacion comercial generica con formulario validado, tabla editable, carga masiva desde Google Sheets/CSV/XLSX y dashboard interactivo.

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
- `Precio Total` se calcula automaticamente como `Monto * Cantidad`.
- La importacion desde Excel se procesa en el navegador usando SheetJS por CDN.
