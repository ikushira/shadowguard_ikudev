# Script PowerShell para renombrar archivos que contienen la marca antigua
# Ejecuta este script en PowerShell desde la carpeta del proyecto:
# .\scripts\rename-assets.ps1

$map = @{
    'Documentación del Proyecto ShadowGuard VPN.docx' = 'Documentación del Proyecto InterNeon VPN.docx'
    'Proyecto ShadowGuard Vpn By IkuDev.pdf' = 'Proyecto InterNeon VPN By IkuDev.pdf'
}

foreach ($old in $map.Keys) {
    $new = $map[$old]
    if (Test-Path $old) {
        Write-Host "Renombrando '$old' -> '$new'"
        try {
            Rename-Item -Path $old -NewName $new -ErrorAction Stop
        } catch {
            Write-Host ("ERROR al renombrar '{0}': {1}" -f $old, $_) -ForegroundColor Red
        }
    } else {
        Write-Host "No se encontró: $old" -ForegroundColor Yellow
    }
}
