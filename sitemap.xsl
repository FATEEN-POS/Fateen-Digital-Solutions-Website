<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
<xsl:output method="html" encoding="UTF-8" indent="yes"/>
<xsl:template match="/">
<html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><meta name="robots" content="noindex"/>
<title>Sitemap | Fateen Digital Solutions</title>
<style>
body{margin:0;background:#0E0E0E;color:#F2EFE8;font:16px/1.7 "IBM Plex Sans",system-ui,Segoe UI,Tahoma,sans-serif;padding:32px 16px}
.w{max-width:960px;margin:auto}h1{font-size:28px;margin:0 0 6px}p{color:#9B978D;margin:0 0 24px}
.lab{font-weight:600;font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#FF4F1F}
.t{overflow-x:auto;border:1px solid #2A2A28;border-radius:14px}table{border-collapse:collapse;width:100%;min-width:640px}
th,td{padding:12px 16px;text-align:start;border-bottom:1px solid #2A2A28;font-size:14px}th{color:#9B978D;font-weight:600;background:#171717}tr:last-child td{border:0}
a{color:#F2EFE8;text-decoration:none;border-bottom:1px solid #FF4F1F}a:hover{color:#FF4F1F}.m{color:#9B978D}
</style></head><body><div class="w">
<div class="lab">Fateen Digital Solutions</div>
<h1>Sitemap</h1>
<p><xsl:value-of select="count(s:urlset/s:url)"/> URLs, with Arabic and English alternates and images. Built for search engines.</p>
<div class="t"><table><thead><tr><th>URL</th><th>Language</th><th>Updated</th><th>Images</th><th>Priority</th></tr></thead><tbody>
<xsl:for-each select="s:urlset/s:url">
<tr><td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
<td class="m"><xsl:choose><xsl:when test="contains(s:loc,'/en/') or substring(s:loc,string-length(s:loc)-3)='/en/'">EN</xsl:when><xsl:otherwise>AR</xsl:otherwise></xsl:choose></td>
<td class="m"><xsl:value-of select="s:lastmod"/></td>
<td class="m"><xsl:value-of select="count(image:image)"/></td>
<td class="m"><xsl:value-of select="s:priority"/></td></tr>
</xsl:for-each></tbody></table></div>
</div></body></html>
</xsl:template>
</xsl:stylesheet>
