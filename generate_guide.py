"""
Weekend_Structure_Guide.pdf — Zach Thomas Coaching
Multi-page PDF: cover + 6 content pages
"""

from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas as rl_canvas
from reportlab.lib.colors import HexColor

# ── Design tokens ─────────────────────────────────────────────────────────────
BG     = HexColor('#111111')
ORANGE = HexColor('#F5620A')
WHITE  = HexColor('#EFEFEF')
OFFWHT = HexColor('#CCCCCC')
DIM    = HexColor('#888888')
DIMMER = HexColor('#444444')
RULE   = HexColor('#282828')
CARD   = HexColor('#1A1A1A')
WKND   = HexColor('#1D1200')

W, H  = A4
PAD   = 48
CW    = W - PAD * 2   # ≈ 499 pt

# Typography — sized to fill pages
BODY_SZ   = 12.0
BODY_LEAD = 20.0

CONTENT_TOP = H - 72
CONTENT_BOT = 30

OUTPUT = 'Weekend_Structure_Guide.pdf'

c = rl_canvas.Canvas(OUTPUT, pagesize=A4)
_page = [0]


# ══════════════════════════════════════════════════════════════════════════════
#  PRIMITIVES
# ══════════════════════════════════════════════════════════════════════════════

def _wrap(text, font, size, max_w):
    words = text.split()
    lines, line = [], []
    for word in words:
        probe = ' '.join(line + [word])
        if c.stringWidth(probe, font, size) <= max_w:
            line.append(word)
        else:
            if line:
                lines.append(' '.join(line))
            line = [word]
    if line:
        lines.append(' '.join(line))
    return lines or ['']


def _measure(text, font, size, leading, max_w):
    """Height a text block would occupy."""
    return len(_wrap(text, font, size, max_w)) * leading


def _block(text, x, y, font, size, color, leading, max_w):
    c.setFont(font, size)
    c.setFillColor(color)
    for ln in _wrap(text, font, size, max_w):
        c.drawString(x, y, ln)
        y -= leading
    return y


def _centered(text, y, font, size, color):
    c.setFont(font, size)
    c.setFillColor(color)
    c.drawString((W - c.stringWidth(text, font, size)) / 2, y, text)


def _hrule(y, color=RULE, lw=0.4, x0=None, x1=None):
    c.setStrokeColor(color)
    c.setLineWidth(lw)
    c.line(x0 if x0 is not None else PAD, y,
           x1 if x1 is not None else W - PAD, y)


def _rect(x, y, w, h, color, radius=0):
    c.setFillColor(color)
    if radius:
        c.roundRect(x, y, w, h, radius, fill=1, stroke=0)
    else:
        c.rect(x, y, w, h, fill=1, stroke=0)


# ══════════════════════════════════════════════════════════════════════════════
#  PAGE CHROME
# ══════════════════════════════════════════════════════════════════════════════

def _new_page(show_chrome=True):
    if _page[0] > 0:
        c.showPage()
    _page[0] += 1
    _rect(0, 0, W, H, BG)
    _rect(0, H - 5, W, 5, ORANGE)
    _rect(0, 0, W, 5, ORANGE)
    if show_chrome:
        _page_header()
        _page_footer()


def _page_header():
    lx, ly, ls = PAD, H - 42, 26
    _rect(lx, ly, ls, ls, CARD)
    c.setStrokeColor(ORANGE)
    c.setLineWidth(1)
    c.rect(lx, ly, ls, ls, fill=0, stroke=1)
    c.setFont('Helvetica-Bold', 8)
    c.setFillColor(ORANGE)
    tw = c.stringWidth('ZT', 'Helvetica-Bold', 8)
    c.drawString(lx + (ls - tw) / 2, ly + 9, 'ZT')
    c.setFont('Helvetica', 7.5)
    c.setFillColor(DIM)
    c.drawString(lx + ls + 9, ly + 10, 'ZACH THOMAS COACHING')
    _hrule(H - 52, RULE, 0.5)


def _page_footer():
    _hrule(22, RULE, 0.4)
    c.setFont('Helvetica', 7.5)
    c.setFillColor(DIMMER)
    pn = str(_page[0])
    c.drawString((W - c.stringWidth(pn, 'Helvetica', 7.5)) / 2, 10, pn)


# ══════════════════════════════════════════════════════════════════════════════
#  CONTENT COMPONENTS
# ══════════════════════════════════════════════════════════════════════════════

def _section_heading(num, title, y):
    y -= 8
    label = f'0{num}' if num < 10 else str(num)
    c.setFont('Helvetica-Bold', 9)
    lw = c.stringWidth(label, 'Helvetica-Bold', 9)
    pill_w = lw + 18
    _rect(PAD, y - 4, pill_w, 20, ORANGE)
    c.setFillColor(BG)
    c.drawString(PAD + 9, y + 8, label)
    c.setFont('Helvetica-Bold', 19)
    c.setFillColor(WHITE)
    c.drawString(PAD + pill_w + 12, y + 7, title)
    y -= 12
    _hrule(y, ORANGE, 1.2)
    return y - 32


def _para(text, y, font='Helvetica', size=BODY_SZ, lead=BODY_LEAD,
          color=WHITE, gap=16, x=None, max_w=None):
    y = _block(text, x or PAD, y, font, size, color, lead, max_w or CW)
    return y - gap


def _sub(title, y):
    c.setFont('Helvetica-Bold', 13)
    c.setFillColor(ORANGE)
    c.drawString(PAD, y, title)
    return y - 22


def _step(num, title, body, y):
    cx, cy, r = PAD + 14, y - 12, 13
    c.setFillColor(ORANGE)
    c.circle(cx, cy, r, fill=1, stroke=0)
    c.setFont('Helvetica-Bold', 9.5)
    c.setFillColor(BG)
    tw = c.stringWidth(str(num), 'Helvetica-Bold', 9.5)
    c.drawString(cx - tw / 2, cy - 3.5, str(num))
    c.setFont('Helvetica-Bold', 13)
    c.setFillColor(ORANGE)
    c.drawString(PAD + 36, y - 7, title)
    y -= 32
    y = _block(body, PAD + 36, y, 'Helvetica', BODY_SZ, WHITE, BODY_LEAD, CW - 36)
    return y - 42


# ══════════════════════════════════════════════════════════════════════════════
#  PAGE 1 — COVER
# ══════════════════════════════════════════════════════════════════════════════

def cover():
    _new_page(show_chrome=False)
    _rect(0, 0, 5, H, ORANGE)

    # Logo
    lx, ly, ls = PAD + 10, H - 106, 58
    _rect(lx - 6, ly - 6, ls + 12, ls + 12, CARD, radius=5)
    c.setStrokeColor(ORANGE)
    c.setLineWidth(1.5)
    c.roundRect(lx - 6, ly - 6, ls + 12, ls + 12, 5, fill=0, stroke=1)
    c.setFont('Helvetica-Bold', 24)
    c.setFillColor(ORANGE)
    tw = c.stringWidth('ZT', 'Helvetica-Bold', 24)
    c.drawString(lx + (ls - tw) / 2, ly + 18, 'ZT')
    bx = lx + ls + 14
    c.setFont('Helvetica', 9)
    c.setFillColor(DIM)
    c.drawString(bx, ly + 34, 'ZACH THOMAS')
    c.setFont('Helvetica-Bold', 9)
    c.setFillColor(WHITE)
    c.drawString(bx, ly + 20, 'COACHING')

    # Tag
    tag_y = H - 194
    c.setFont('Helvetica-Bold', 8)
    c.setFillColor(ORANGE)
    c.drawString(PAD + 10, tag_y, 'A FREE GUIDE')
    _rect(PAD + 10, tag_y - 9, 58, 2, ORANGE)

    # Title
    ty = tag_y - 64
    c.setFont('Helvetica-Bold', 44)
    c.setFillColor(WHITE)
    c.drawString(PAD + 10, ty, 'The Weekend')
    ty -= 54
    c.drawString(PAD + 10, ty, 'Structure')
    struct_w = c.stringWidth('Structure', 'Helvetica-Bold', 44)
    ty -= 11
    _rect(PAD + 10, ty, struct_w, 4, ORANGE)

    # Subtitle
    ty -= 32
    c.setFont('Helvetica-Oblique', 14)
    c.setFillColor(OFFWHT)
    c.drawString(PAD + 10, ty, 'How to eat pizza on Saturday and still')
    ty -= 21
    c.drawString(PAD + 10, ty, 'make progress by Monday.')

    # Divider
    ty -= 38
    _hrule(ty, RULE, 0.5, PAD + 10, W - PAD - 10)

    # What's inside
    ty -= 24
    c.setFont('Helvetica-Bold', 8)
    c.setFillColor(ORANGE)
    c.drawString(PAD + 10, ty, "WHAT'S INSIDE")

    ty -= 20
    contents = [
        "Why weekends derail your progress — and why it's not your fault",
        'The calorie cycling method explained in plain English',
        'A five-step framework you can start this week',
        'A real sample week with actual food and calorie counts',
        'The three rules that hold the whole thing together',
        'A client who lost 15kg eating out every single weekend',
    ]
    for item in contents:
        c.setFillColor(ORANGE)
        c.circle(PAD + 19, ty + 4, 2.5, fill=1, stroke=0)
        c.setFont('Helvetica', 10.5)
        c.setFillColor(WHITE)
        c.drawString(PAD + 28, ty, item)
        ty -= 21

    # Pull quote — fills lower section
    ty -= 24
    _hrule(ty, RULE, 0.5, PAD + 10, W - PAD - 10)
    ty -= 32

    c.setFont('Helvetica-Bold', 20)
    c.setFillColor(WHITE)
    c.drawString(PAD + 10, ty, '"Not more discipline.')
    ty -= 28
    c.setFillColor(ORANGE)
    c.drawString(PAD + 10, ty, 'Just a better plan."')

    ty -= 22
    c.setFont('Helvetica', 9)
    c.setFillColor(DIM)
    c.drawString(PAD + 10, ty, '— Zach Thomas')

    ty -= 28
    _hrule(ty, RULE, 0.5, PAD + 10, W - PAD - 10)

    # Bottom strip
    _rect(0, 0, W, 40, HexColor('#0A0A0A'))
    _rect(0, 0, W, 5, ORANGE)
    c.setFont('Helvetica', 8)
    c.setFillColor(DIM)
    c.drawString(PAD + 10, 15, 'zachthomas.coaching  ·  @zachthomas_coaching')


# ══════════════════════════════════════════════════════════════════════════════
#  PAGE 2 — S1: The Problem  +  S2: The Concept
# ══════════════════════════════════════════════════════════════════════════════

def page_2():
    _new_page()
    y = CONTENT_TOP

    y = _section_heading(1, 'The Problem', y)

    y = _para(
        "It's not your discipline that falls apart at the weekend. It's your structure.",
        y, font='Helvetica-Bold', gap=26)

    y = _para(
        "Monday to Friday you've got a routine. Breakfast at the same time. Lunch sorted. "
        "Dinner planned. The week takes care of itself because it's predictable.",
        y, gap=22)

    y = _para(
        "Then Saturday arrives. No alarm. Brunch instead of breakfast. A couple of drinks "
        "in the afternoon. A takeaway because you've earned it. Sunday roast with the family. "
        "A few bits and pieces in the evening.",
        y, gap=22)

    y = _para(
        "None of it feels excessive. And yet by Monday morning you've undone most of the "
        "week's work.",
        y, gap=22)

    y = _para(
        "That's not weakness. That's what happens when there's no plan. The guy making "
        "consistent progress isn't more disciplined than you — he's just thought about the "
        "weekend differently.",
        y, gap=48)

    y = _section_heading(2, 'The Concept', y)

    y = _para(
        "Here's the shift that makes everything easier.",
        y, font='Helvetica-Bold', gap=26)

    y = _para(
        "Stop thinking about a daily calorie target. Start thinking about a weekly one.",
        y, gap=22)

    y = _para(
        "If your target is 1,800 calories a day, that's 12,600 calories across the week. "
        "That number doesn't change. But how you distribute it across the seven days — "
        "that's entirely up to you.",
        y, gap=22)

    y = _para(
        "And that's where the flexibility lives.",
        y, font='Helvetica-Bold', color=ORANGE, gap=26)

    y = _para(
        "Instead of eating the same amount every day and struggling every weekend, you eat "
        "slightly less during the week and bank the difference. By Friday evening you've got "
        "a buffer. You've earned the pizza. You've earned the glass of wine. Not through "
        "willpower — through planning.",
        y, gap=22)


# ══════════════════════════════════════════════════════════════════════════════
#  PAGE 3 — S3: The Step-By-Step
# ══════════════════════════════════════════════════════════════════════════════

def page_3():
    _new_page()
    y = CONTENT_TOP

    y = _section_heading(3, 'The Step-By-Step', y)

    y = _step(
        1, 'Find your number',
        "Your daily calorie target is the number of calories you need to lose weight at a "
        "steady pace. It's personal — based on your height, weight, age and how active you "
        "are. We'll use 1,800 as our example throughout. That gives a weekly total of "
        "12,600 calories. Find yours at calculator.net/calorie-calculator.html",
        y)

    y = _step(
        2, 'Monday to Thursday — eat slightly under',
        "Drop to around 1,600 calories. That's 200 fewer per day. Across four days, you've "
        "saved 800 calories without really feeling it — as long as your meals are built "
        "around protein. Protein keeps you full. Vegetables and wholegrains do the rest.",
        y)

    y = _step(
        3, 'Friday — eat at your normal target',
        "No restriction, no fasting. Eat at your full 1,800. You've already banked your "
        "800 calorie buffer across the week, and you haven't touched a penny of it. Head "
        "into the weekend with it intact.",
        y)

    y = _step(
        4, 'Saturday and Sunday — use your buffer',
        "You've got 800 extra calories to play with across the weekend. That's 400 each "
        "day — a couple of slices of pizza, a glass of wine, a proper dessert. Or bank "
        "it all for one night and make it a real meal out. You've planned for it. No "
        "guilt. You're still on track.",
        y)

    y = _step(
        5, 'Protect the buffer — the non-negotiables',
        "The whole system depends on Monday to Thursday being consistent. Protein at every "
        "meal. No mindless snacking. No filler foods eating into your buffer before the "
        "weekend even arrives. Slip up mid-week and you've spent money you were saving "
        "for Saturday night.",
        y)


# ══════════════════════════════════════════════════════════════════════════════
#  PAGE 4 — S4: What This Looks Like In Real Life
# ══════════════════════════════════════════════════════════════════════════════

_C = {'day': 38, 'brk': 138, 'lun': 118, 'din': 145, 'tot': 60}

MEALS = [
    ('MON', '3 eggs + wholegrain toast',  420, 'Chicken, rice, salad',  530, 'Salmon, sweet potato, greens',   650, '1,600', False),
    ('TUE', '3 eggs + wholegrain toast',  420, 'Turkey mince, rice, veg', 530, 'Salmon, sweet potato, greens', 650, '1,600', False),
    ('WED', '3 eggs + wholegrain toast',  420, 'Chicken, rice, salad',  530, 'Lean beef stir fry, rice',        650, '1,600', False),
    ('THU', '3 eggs + wholegrain toast',  420, 'Chicken, rice, salad',  530, 'Cod fillet, sweet potato, veg',   650, '1,600', False),
    ('FRI', 'Eggs + avocado toast',       480, 'Chicken wrap + salad',  580, 'Sirloin steak, potatoes, veg',    740, '1,800', False),
    ('SAT', 'Bacon, eggs, sourdough',     680, 'Chicken Caesar wrap',   520, 'Takeaway pizza + glass of wine', 1000, '2,200', True),
    ('SUN', 'Protein pancakes, berries',  550, 'Chicken salad',         450, 'Sunday roast (chicken)',         1200, '2,200', True),
]

ROW_H = 52
HDR_H = 28


def _draw_table(y):
    tx = PAD

    # Header
    _rect(tx, y - HDR_H, CW, HDR_H, HexColor('#1E1E1E'))
    hy = y - 15
    hx = tx
    for key, label, align in [
        ('day', 'DAY',       'c'),
        ('brk', 'BREAKFAST', 'l'),
        ('lun', 'LUNCH',     'l'),
        ('din', 'DINNER',    'l'),
        ('tot', 'TOTAL',     'c'),
    ]:
        cw = _C[key]
        c.setFont('Helvetica-Bold', 7.5)
        c.setFillColor(ORANGE)
        tw = c.stringWidth(label, 'Helvetica-Bold', 7.5)
        c.drawString(hx + (cw - tw) / 2 if align == 'c' else hx + 7, hy, label)
        hx += cw

    y -= HDR_H

    for row in MEALS:
        day, brk, b_cal, lun, l_cal, din, d_cal, tot, wknd = row
        _rect(tx, y - ROW_H, CW, ROW_H, WKND if wknd else HexColor('#161616'))
        _hrule(y, RULE, 0.3, tx, tx + CW)

        my = y - 12
        cy = y - 26
        rx = tx

        # Day
        c.setFont('Helvetica-Bold', 9)
        c.setFillColor(ORANGE if wknd else WHITE)
        tw = c.stringWidth(day, 'Helvetica-Bold', 9)
        c.drawString(rx + (_C['day'] - tw) / 2, my - 3, day)
        rx += _C['day']

        for text, cal, col_key in [(brk, b_cal, 'brk'), (lun, l_cal, 'lun'), (din, d_cal, 'din')]:
            cw = _C[col_key]
            lines = _wrap(text, 'Helvetica', 8.5, cw - 12)
            c.setFont('Helvetica', 8.5)
            c.setFillColor(WHITE)
            c.drawString(rx + 7, my, lines[0])
            if len(lines) > 1:
                c.drawString(rx + 7, my - 11, lines[1])
            c.setFont('Helvetica', 7.5)
            c.setFillColor(DIM)
            c.drawString(rx + 7, cy, f'{cal} cal')
            rx += cw

        c.setFont('Helvetica-Bold', 9.5)
        c.setFillColor(ORANGE if wknd else OFFWHT)
        tw = c.stringWidth(tot, 'Helvetica-Bold', 9.5)
        c.drawString(rx + (_C['tot'] - tw) / 2, my - 3, tot)
        y -= ROW_H

    _hrule(y, RULE, 0.3, tx, tx + CW)
    return y - 18


def page_4():
    _new_page()
    y = CONTENT_TOP

    y = _section_heading(4, 'What This Looks Like In Real Life', y)

    y = _para(
        "Numbers on paper don't mean much until you can see what they look like as actual "
        "meals. Here's a full sample week using 1,800 as the daily target — the same "
        "weekly total, just distributed differently.",
        y, gap=24)

    y = _draw_table(y)

    y = _para(
        "Saturday and Sunday feel like normal weekends — because they are. The meals look "
        "like a real life, not a diet plan. That's the point.",
        y, color=OFFWHT, size=11, lead=17, gap=14)

    y = _para(
        "The Saturday dinner alone — three slices of pizza and a glass of wine — would "
        "normally derail a week. Here, it's built into the plan. You didn't blow it. "
        "You just used what you'd saved.",
        y, color=OFFWHT, size=11, lead=17, gap=22)

    # Weekly total callout
    _rect(PAD, y - 52, CW, 52, CARD, radius=4)
    c.setFont('Helvetica-Bold', 10)
    c.setFillColor(ORANGE)
    label = 'Weekly total:  '
    lw = c.stringWidth(label, 'Helvetica-Bold', 10)
    c.drawString(PAD + 16, y - 22, label)
    c.setFont('Helvetica', 10)
    c.setFillColor(WHITE)
    c.drawString(PAD + 16 + lw, y - 22, '12,600 calories — same as eating 1,800 every single day.')
    c.setFont('Helvetica', 9)
    c.setFillColor(DIM)
    c.drawString(PAD + 16, y - 38, 'Same result. More flexibility. Zero guilt.')


# ══════════════════════════════════════════════════════════════════════════════
#  PAGE 5 — S5: The Non-Negotiables
# ══════════════════════════════════════════════════════════════════════════════

def page_5():
    _new_page()
    y = CONTENT_TOP

    y = _section_heading(5, 'The Non-Negotiables', y)

    y = _para(
        "The framework only works if the foundation holds. Three rules. All of them matter.",
        y, gap=36)

    y = _sub('Protein at every meal', y)

    y = _para(
        "Protein is the reason that dropping from 1,800 to 1,600 calories doesn't make you "
        "miserable. Chicken, eggs, Greek yogurt, fish, lean beef — these foods keep you "
        "full for hours. Without them, 1,600 calories feels like nothing. With them, "
        "it's plenty.",
        y, gap=22)

    y = _para(
        "Aim for at least 30g per meal. More is fine. Less, and you'll find yourself raiding "
        "the cupboards at 9pm and quietly burning through your weekend buffer before "
        "Friday's even arrived.",
        y, gap=58)

    y = _sub('No mindless snacking', y)

    y = _para(
        "A handful of crisps here. A biscuit with your coffee. A couple of squares of "
        "chocolate because it's in the fridge and you walked past it. None of it feels "
        "significant in the moment. But it adds up to 200 or 300 calories you barely "
        "registered — gone from your buffer before the week's even done.",
        y, gap=22)

    y = _para(
        "If you're genuinely hungry between meals, eat. A piece of fruit, some yogurt, a "
        "handful of nuts — real food. But if you're bored, stressed or just eating out "
        "of habit, have a glass of water first. Most of the time, the urge passes.",
        y, gap=58)

    y = _sub('No filler foods', y)

    y = _para(
        "Filler foods are high in calories, low in volume and low in protein. They don't "
        "fill you up — they just eat into your budget. Crisps, biscuits, white bread, "
        "pastries, breakfast cereal. They're not evil, but they're expensive in calorie "
        "terms and they leave you hungry again an hour later.",
        y, gap=22)

    y = _para(
        "During the week especially, swap them out. A chicken breast instead of a sandwich. "
        "Rice instead of pasta. Eggs instead of cereal. Small swaps — but they compound "
        "across the week and protect the buffer that makes your weekend possible.",
        y, gap=0)


# ══════════════════════════════════════════════════════════════════════════════
#  PAGE 6 — S6: Proof  +  S7: What's Next
# ══════════════════════════════════════════════════════════════════════════════

def page_6():
    _new_page()
    y = CONTENT_TOP

    # Section 6
    y = _section_heading(6, 'Proof', y)

    # Measure Tom's card content first so card height is exact
    IP = 18
    card_cw = CW - IP - 8
    p1 = ("Tom came to me at 81kg. For someone at 5ft 5, that was the heaviest he'd ever "
          "been. Tired, uncomfortable in his own skin, and had tried to lose weight more "
          "times than he could count.")
    p2 = "We built a plan using exactly this structure. Different numbers — same method."
    p3 = ("Over six months, Tom lost almost 15kg. He ate out every single weekend. Didn't "
          "skip a birthday, didn't turn down a Christmas dinner. Just made smarter choices "
          "during the week.")

    h1 = _measure(p1, 'Helvetica', BODY_SZ, BODY_LEAD, card_cw)
    h2 = _measure(p2, 'Helvetica', BODY_SZ, BODY_LEAD, card_cw)
    h3 = _measure(p3, 'Helvetica', BODY_SZ, BODY_LEAD, card_cw)
    CARD_H = 20 + h1 + 20 + h2 + 20 + h3 + 20   # top pad + 3 blocks + gaps + bottom pad

    _rect(PAD, y - CARD_H, CW, CARD_H, CARD, radius=4)
    _rect(PAD, y - CARD_H, 3, CARD_H, ORANGE)

    cy = y - 20
    cy = _block(p1, PAD + IP, cy, 'Helvetica', BODY_SZ, WHITE, BODY_LEAD, card_cw)
    cy -= 20
    cy = _block(p2, PAD + IP, cy, 'Helvetica', BODY_SZ, WHITE, BODY_LEAD, card_cw)
    cy -= 20
    cy = _block(p3, PAD + IP, cy, 'Helvetica', BODY_SZ, WHITE, BODY_LEAD, card_cw)

    y -= CARD_H + 22

    y = _para(
        "Last time we spoke he told me he doesn't even feel like he's on a diet. His shirts "
        "fit. His energy's back. And he's not touched a diet plan since.",
        y, gap=40)

    # Section 7
    y = _section_heading(7, "What's Next", y)

    y = _para(
        "If you've read this far, you already understand the concept. What you might need "
        "is your specific number, a plan built around your actual schedule, and someone in "
        "your corner when it gets difficult.",
        y, gap=20)

    y = _para("That's what I do.", y, font='Helvetica-Bold', color=WHITE, gap=20)

    y = _para(
        "If you want to talk through where you're at and whether coaching is the right "
        "fit — book a free call. No hard sell. No commitment. Just a straight conversation "
        "about what's actually getting in your way.",
        y, gap=32)

    # CTA
    cta_h = 52
    _rect(PAD, y - cta_h, CW, cta_h, ORANGE, radius=6)
    cta = 'Book your free call at [your link here]'
    c.setFont('Helvetica-Bold', 13)
    c.setFillColor(BG)
    tw = c.stringWidth(cta, 'Helvetica-Bold', 13)
    c.drawString((W - tw) / 2, y - 30, cta)

    y -= cta_h + 18

    c.setFont('Helvetica', 9.5)
    c.setFillColor(DIM)
    ig = 'Or DM me on Instagram: @zachthomas_coaching'
    tw = c.stringWidth(ig, 'Helvetica', 9.5)
    c.drawString((W - tw) / 2, y, ig)


# ══════════════════════════════════════════════════════════════════════════════
#  BUILD
# ══════════════════════════════════════════════════════════════════════════════

cover()
page_2()
page_3()
page_4()
page_5()
page_6()

c.save()
print(f"Saved: {OUTPUT}  ({_page[0]} pages)")
