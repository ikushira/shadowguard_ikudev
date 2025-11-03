param(
    [switch]$RemoveOld
)

# Copiar el logo nuevo a la carpeta images
# Ejecuta desde la carpeta del proyecto en PowerShell:
# .\scripts\copy-logo.ps1

$source = 'interneonvpn.jpeg'
$dest = 'images\interneonvpn.jpeg'
if (Test-Path $source) {
    Copy-Item -Path $source -Destination $dest -Force
    Write-Host "Copiado $source -> $dest"
} else {
    Write-Host "No se encontró el archivo fuente: $source" -ForegroundColor Yellow
}

if ($RemoveOld) {
    $old1 = 'images\logo.png'
    $old2 = 'images\logo2.png'
    foreach ($f in @($old1, $old2)) {
        if (Test-Path $f) {
            try {
                Remove-Item -Path $f -Force -ErrorAction Stop
                Write-Host "Eliminado: $f"
            } catch {
                Write-Host ("ERROR al eliminar '{0}': {1}" -f $f, $_) -ForegroundColor Red
            }
        } else {
            Write-Host "No se encontró: $f" -ForegroundColor Yellow
        }
    }
}
