"""Raport vetëm-lexim për PNG-të; ekzekutohet nga dosja e website-it."""
from pathlib import Path

folder = Path(__file__).resolve().parent / "images"
files = sorted(
    (p for p in folder.rglob("*") if p.is_file() and p.suffix.lower() == ".png"),
    key=lambda p: p.stat().st_size,
    reverse=True,
)
if not files:
    print("Nuk u gjetën PNG. Vendos dosjen ekzistuese images/ pranë këtij script-i.")
else:
    print("PNG-të nga më i rëndi te më i lehti:")
    for path in files:
        print(f"{path.stat().st_size / 1024:10.1f} KiB  {path.relative_to(folder.parent)}")
