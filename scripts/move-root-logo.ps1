# Mueve el logo interneonvpn.jpeg desde la raíz del proyecto a la carpeta images
$src = 'interneonvpn.jpeg'
$dest = 'images\interneonvpn.jpeg'
if (Test-Path $src) {
    try {
        Move-Item -Path $src -Destination $dest -Force -ErrorAction Stop
        Write-Host "Movido $src -> $dest"
    } catch {
        Write-Host ("ERROR al mover '{0}': {1}" -f $src, $_) -ForegroundColor Red
    }
} else {
    Write-Host "No se encontró $src en la raíz del proyecto." -ForegroundColor Yellow
}
