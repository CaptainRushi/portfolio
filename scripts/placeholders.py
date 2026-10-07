from PIL import Image, ImageDraw, ImageFilter
import os
import random

random.seed(7)
os.makedirs("public/projects/vizora", exist_ok=True)

# clouds.jpg: mid-gray with soft blurred blobs
W, H = 1600, 900
img = Image.new("RGB", (W, H), (175, 175, 175))
d = ImageDraw.Draw(img)
for _ in range(90):
    x, y = random.randint(0, W), random.randint(0, H)
    r = random.randint(150, 380)
    v = 175 + random.randint(-40, 60)
    v = max(0, min(255, v))
    for i in range(0, r, 6):
        d.ellipse([x - i, y - i * 0.55, x + i, y + i * 0.55], outline=(v, v, v), width=3)
img = img.filter(ImageFilter.GaussianBlur(18))
img.save("public/clouds.jpg", quality=82)
print("clouds ok")

covers = {
    "vizora": "VIZORA",
    "mission-control": "MISSION CONTROL",
    "trueframe": "TRUEFRAME",
    "workflow-agent": "WORKFLOW AGENT",
}
for slug, label in covers.items():
    os.makedirs(f"public/projects/{slug}", exist_ok=True)
    im = Image.new("RGB", (1200, 900), (38, 38, 38))
    dr = ImageDraw.Draw(im)
    dr.rectangle([40, 40, 1160, 860], outline=(90, 90, 90), width=2)
    dr.text((80, 120), label, fill=(245, 245, 245))
    dr.text((80, 820), "cover coming soon", fill=(140, 140, 140))
    im.save(f"public/projects/{slug}/cover.png")
    print("cover ok", slug)
