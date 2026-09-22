Add-Type -AssemblyName System.Drawing

$srcPath = (Resolve-Path "public\sanatana_gallery_collage.jpg").Path
$srcImg = [System.Drawing.Image]::FromFile($srcPath)

$wTotal = [int]$srcImg.Width
$hTotal = [int]$srcImg.Height
Write-Host "Image dimensions: $wTotal x $hTotal"

$cols = 4
$rows = 3
$tileW = [int]($wTotal / $cols)
$tileH = [int]($hTotal / $rows)

$index = 1
for ($r = 0; $r -lt $rows; $r++) {
    for ($c = 0; $c -lt $cols; $c++) {
        $x = [int]($c * $tileW)
        $y = [int]($r * $tileH)

        $cropRect = New-Object System.Drawing.Rectangle($x, $y, $tileW, $tileH)
        $bmp = New-Object System.Drawing.Bitmap($tileW, $tileH)
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $destRect = New-Object System.Drawing.Rectangle(0, 0, $tileW, $tileH)
        $g.DrawImage($srcImg, $destRect, $cropRect, [System.Drawing.GraphicsUnit]::Pixel)

        $outPath = (Join-Path (Get-Location) "public\gallery_item_$index.jpg")
        $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
        $g.Dispose()
        $bmp.Dispose()
        Write-Host "Successfully saved $outPath"
        $index++
    }
}

$srcImg.Dispose()
Write-Host "ALL 12 PHOTOS CROPPED PERFECTLY!"
