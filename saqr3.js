// SAQR CHICKEN
// رقم واتساب بصيغة دولية بدون صفر البداية
const WHATSAPP_NUMBER = "201035100175";

const menu = [

{category:"سندوتشات تشيكن",name:"تشيكن ران",desc:"صدور دجاج فريش - صوص كريمي - موزاريلا ستيكس - تركي مدخن - حلقات بصل - خيار مخلل - كابوتشا - مايونيز",variants:[["Single",145],["Double",165]]},

{category:"سندوتشات تشيكن",name:"أوريجينال",desc:"صدور دجاج فريش - صوص شيدر - مايونيز - خيار مخلل - كابوتشا",variants:[["Single",115],["Double",140]]},

{category:"سندوتشات تشيكن",name:"سبايس كرافت",desc:"صدور دجاج فريش - صوص شيدر - مايونيز سبايسي - كابوتشا - هالبينو",variants:[["Single",115],["Double",140]]},

{category:"سندوتشات تشيكن",name:"تشيز لافرز",desc:"صدور دجاج فريش - صوص شيدر - موزاريلا ستيكس - مايونيز - خيار مخلل - كابوتشا",variants:[["Single",130],["Double",155]]},

{category:"سندوتشات تشيكن",name:"رانشي مانشي",desc:"صدور دجاج فريش - صوص رانش - حلقات بصل - تركي مدخن - مايونيز - خيار مخلل - كابوتشا",variants:[["Single",135],["Double",160]]},

{category:"بيف وراب",name:"ديسكفري",desc:"لحم بقري صافي - حلقات بصل - طماطم - موزاريلا ستيكس - مايونيز - بيف مدخن - صوص بيج تايستي - خيار مخلل - كابوتشا",variants:[["Single",140],["Double",180],["Triple",230]]},

{category:"بيف وراب",name:"أولد سكول",desc:"لحم بقري صافي - صوص بيج تايستي - مايونيز - طماطم - خيار مخلل - كابوتشا",variants:[["Single",110],["Double",150],["Triple",210]]},

{category:"بيف وراب",name:"فولكانو",desc:"لحم بقري صافي - صوص شيدر - هالبينو - مايونيز سبايسي - كابوتشا",variants:[["Single",110],["Double",150],["Triple",210]]},

{category:"بيف وراب",name:"كاراملايزد باربيكيو",desc:"لحم بقري صافي - بصل مكرمل - مايونيز - صوص باربيكيو - كابوتشا",variants:[["Single",110],["Double",150],["Triple",210]]},

{category:"بيف وراب",name:"مشروم مارفلز",desc:"لحم بقري صافي - صوص مشروم - صوص شيدر - مايونيز - خيار مخلل - كابوتشا",variants:[["Single",130],["Double",170],["Triple",220]]},

{category:"بيف وراب",name:"بيج فيلر",desc:"خبز الفينر - صدور دجاج فريش - صوص شيدر تركي مدخن - كابوتشا - مايونيز أو سبايسي وهالبينو",price:150,options:["عادي","سبايسي"]},

{category:"بيف وراب",name:"تشيكن راب",desc:"خبز التورتيلا - صدور دجاج فريش - صوص شيدر تركي مدخن - مايونيز أو سبايسي",price:120,options:["عادي","سبايسي"]},

{category:"وجبات على السريع",name:"ريزو",desc:"استريس + أرز + صوص من اختيارك",price:85,options:["عادي","سبايسي"]},

{category:"وجبات على السريع",name:"ريزو جريل",desc:"استريس مشوي + أرز + صوص من اختيارك",price:85,options:["عادي","سبايسي"]},

{category:"وجبات على السريع",name:"تشيز فرايز",desc:"فرايز مقلية + صوص جبنة شيدر",price:55},

{category:"وجبات على السريع",name:"فاير فرايز",desc:"فرايز + شيدر + هالبينو + سويت تشيلي",price:60},

{category:"وجبات على السريع",name:"كرانشي فرايز",desc:"فرايز + شيدر + قطع استريس",price:80},

{category:"وجبات فردية",name:"سناك بوكس",desc:"2 قطعة دجاج + بطاطس + 1 خبز + صوص + كاتشب",price:130},

{category:"وجبات فردية",name:"وجبة صولو",desc:"3 قطع استريس + بطاطس + 2 خبز + صوص + كاتشب",price:140},

{category:"وجبات فردية",name:"دينر بوكس",desc:"3 قطع دجاج + بطاطس + أرز + 2 خبز + صوص + كاتشب",price:190},

{category:"وجبات فردية",name:"سوبر دينر بوكس",desc:"4 قطع دجاج + بطاطس + أرز + 2 خبز + صوص + كاتشب",price:235},

{category:"وجبات فردية",name:"مكس بوكس",desc:"2 دجاج + 2 استريس + بطاطس + أرز + 2 خبز + صوص + كاتشب",price:200},

{category:"وجبات فردية",name:"توين تندر",desc:"5 قطع استريس + بطاطس + 3 خبز + كول سلو + صوص + كاتشب",price:210},

{category:"وجبات فردية",name:"تندر اكسترا",desc:"7 قطع استريس + بطاطس + 3 خبز + كول سلو + صوص + كاتشب",price:270},

{category:"وجبات فردية",name:"فاليو ميل",desc:"6 قطع دجاج + بطاطس + 3 خبز + كول سلو + صوص + كاتشب",price:345},

{category:"وجبات عائلية",name:"فاميلي استريس",desc:"12 قطعة استريس + فرايز كبير + 5 خبز + كول سلو + 2 صوص + لتر كولا",price:490},

{category:"وجبات عائلية",name:"فاميلي ميل",desc:"9 قطع دجاج + فرايز كبير + 4 خبز + كول سلو كبير + صوص + كاتشب",price:520},

{category:"وجبات عائلية",name:"فرايتي ميل",desc:"6 قطع دجاج + 6 استريس + فرايز كبير + 6 خبز + كول سلو كبير + 2 صوص + كاتشب + لتر كولا",price:550},

{category:"وجبات عائلية",name:"وجبة العيلة",desc:"12 قطعة دجاج + فرايز كبير + 6 خبز + كول سلو كبير + 2 صوص + كاتشب + لتر كولا",price:690},

{category:"وجبات عائلية",name:"وجبة اقتصادية",desc:"15 قطعة دجاج + فرايز عائلي + 7 خبز + كول سلو كبير + 2 صوص + كاتشب + لتر كولا",price:830},

{category:"وجبات عائلية",name:"سوبر فاميلي ميل",desc:"18 قطعة دجاج + فرايز عائلي + 9 خبز + 2 كول سلو كبير + 3 صوص + كاتشب + لتر كولا",price:920},

{category:"هابي ميل",name:"هابي ميل تشيكن",desc:"دجاج + بطاطس + خبز + عصير",price:100},

{category:"هابي ميل",name:"هابي ميل استريس",desc:"استريس + بطاطس + خبز + عصير",price:100},

{category:"إضافات",name:"فرايز",variants:[["صغير",30],["كبير",50]]},

{category:"إضافات",name:"أرز مبهر سادة",price:30},

{category:"إضافات",name:"كومبو",desc:"فرايز + كولا",price:50},

{category:"إضافات",name:"2 خبز",price:10},

{category:"إضافات",name:"قطعة دجاج",price:65},

{category:"إضافات",name:"تبديل قطعة",price:45},

{category:"إضافات",name:"قطعة استريس",price:40},

{category:"إضافات",name:"جبنة شيدر",variants:[["صغير",25],["كبير",40]]},

{category:"إضافات",name:"صوص رانش",variants:[["صغير",25],["كبير",35]]},

{category:"إضافات",name:"تكساس",variants:[["صغير",25],["كبير",35]]},

{category:"إضافات",name:"ثومية",variants:[["صغير",20],["كبير",30]]},

{category:"إضافات",name:"صوص باربيكيو",variants:[["صغير",20],["كبير",30]]},

{category:"إضافات",name:"صوص سويت تشيلي",variants:[["صغير",20],["كبير",30]]},

{category:"إضافات",name:"كول سلو",variants:[["صغير",25],["كبير",40]]},

{category:"إضافات",name:"لاوزند ايلاند",variants:[["صغير",20],["كبير",30]]},

{category:"إضافات",name:"حلقات بصل",price:35},

{category:"إضافات",name:"موزاريلا",price:50},

{category:"إضافات",name:"لتر كولا",price:35},

{category:"إضافات",name:"كولا",variants:[["علبة",20],["كانز",25]]},

{category:"إضافات",name:"عصير",price:20},

{category:"إضافات",name:"مياه",price:10},

{category:"إضافات",name:"صوص تويست",variants:[["صغير",25],["كبير",35]]},

{category:"إضافات",name:"تايجر سبايسي",variants:[["صغير",20],["كبير",30]]},

{category:"إضافات",name:"كومبو التوفير",desc:"كول سلو + 2 صوص من اختيارك",price:60},

{category:"مشروبات وحلويات",name:"أيس كريم",price:40},

{category:"مشروبات وحلويات",name:"عصير مانجو فريش",price:65},

{category:"مشروبات وحلويات",name:"عصير فراولة فريش",price:65},

{category:"مشروبات وحلويات",name:"عصير ليمون نعناع فريش",price:65},

{category:"مشروبات وحلويات",name:"موجيتو",price:75,options:["كلاسيك","شيري","بلو بيري","باشون فروت","خوخ"]},

{category:"مشروبات وحلويات",name:"سموزي",price:75,options:["توت أزرق","ليمون نعناع","باشون فروت","مانجو","فراولة"]}

];

// إعدادات الموقع
let cart = [];
let activeCategory = "الكل";
let orderType = "صالة";

const $ = id => document.getElementById(id);

const money = n => n + " ج.م";

const categories = [
  "الكل",
  ...new Set(menu.map(item => item.category))
];

// عرض الأقسام
function renderCategories() {
  $("categories").innerHTML = categories.map(category => `
    <button class="category ${category === activeCategory ? "active" : ""}"
      data-category="${category}">
      ${category}
    </button>
  `).join("");
}

// عرض المنيو
function renderMenu() {

  const search = $("searchInput").value.trim().toLowerCase();

  const filtered = menu.map((item,index) => ({
    ...item,index
  })).filter(item => {

    const matchesCategory =
      activeCategory === "الكل" ||
      item.category === activeCategory;

    const matchesSearch =
      (item.name + " " + item.desc + " " + item.category)
      .toLowerCase().includes(search);

    return matchesCategory && matchesSearch;
  });

  $("menuGrid").innerHTML = filtered.length
    ? filtered.map(item => {

      let options = "";

      if(item.variants) {
        options = item.variants.map((v,i) =>
          `<option value="${i}">${v[0]} - ${v[1]} ج.م</option>`
        ).join("");
      }

      if(item.options) {
        options = item.options.map((v,i) =>
          `<option value="${i}">${v}</option>`
        ).join("");
      }

      const selector = options
        ? `<select id="option-${item.index}">${options}</select>`
        : "";

      const price = item.variants
        ? "من " + item.variants[0][1] + " ج.م"
        : money(item.price);

      return `
        <article class="food-card">
          <div class="food-top"></div>

          <div class="food-body">

            <div class="food-title">
              <h3>${item.name}</h3>
              <span class="price">${price}</span>
            </div>

            <p class="food-desc">
              ${item.desc || "اختيار مميز من SAQR Chicken"}
            </p>

            ${selector}

            <button class="add-btn" data-add="${item.index}">
              + ضيف للسلة
            </button>

          </div>
        </article>
      `;

    }).join("")
    : "<p>مفيش أصناف مطابقة للبحث ❤️</p>";
}

// حساب الإجمالي
function total() {
  return cart.reduce((sum,item) =>
    sum + item.price * item.qty,0
  );
}

// تحديث السلة
function renderCart() {

  const count = cart.reduce((sum,item) =>
    sum + item.qty,0
  );

  $("cartCount").textContent = count;
  $("floatingCount").textContent = count;

  $("total").textContent = total();
  $("checkoutTotal").textContent = total();

  $("cartItems").innerHTML = cart.length
    ? cart.map((item,index) => `
      <div class="cart-line">

        <div>
          <h4>${item.name}</h4>
          <small>${item.choice || ""}</small>

          <div class="qty">
            <button data-qty="${index}" data-delta="-1">−</button>
            <b>${item.qty}</b>
            <button data-qty="${index}" data-delta="1">+</button>
          </div>
        </div>

        <strong>${money(item.price * item.qty)}</strong>

      </div>
    `).join("")
    : '<p class="empty">السلة لسه فاضية 🍗</p>';
}

// إضافة صنف
function addItem(index) {

  const item = menu[index];

  let choice = "";
  let price = item.price;

  if(item.variants) {

    const selected = item.variants[
      Number($("option-" + index).value)
    ];

    choice = selected[0];
    price = selected[1];

  } else if(item.options) {

    choice = item.options[
      Number($("option-" + index).value)
    ];

  }

  const key = index + "-" + choice;

  const existing = cart.find(item => item.key === key);

  if(existing) {
    existing.qty++;
  } else {
    cart.push({
      key,
      name:item.name,
      choice,
      price,
      qty:1
    });
  }

  renderCart();
  toast("اتضاف " + item.name + " للسلة ❤️");
}

// إشعار
function toast(message) {

  const element = $("toast");

  element.textContent = message;
  element.classList.add("show");

  clearTimeout(window.toastTimer);

  window.toastTimer = setTimeout(() => {
    element.classList.remove("show");
  },2200);

}

// فتح السلة
function openCart() {
  $("cart").classList.add("open");
  $("cartOverlay").classList.add("show");
}

// إغلاق السلة
function closeCart() {
  $("cart").classList.remove("open");
  $("cartOverlay").classList.remove("show");
}

// فتح صفحة البيانات
function openCheckout() {

  if(!cart.length) {
    toast("ضيف أكلك للسلة الأول 🍗");
    return;
  }

  closeCart();

  $("checkoutOverlay").classList.add("show");
}

// تغيير طريقة الاستلام
function setOrderType(type) {

  orderType = type;

  document.querySelectorAll(".type").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.type === type
    );
  });

  $("dineFields").classList.toggle(
    "hidden",type !== "صالة"
  );

  $("deliveryFields").classList.toggle(
    "hidden",type !== "توصيل"
  );

  $("takeawayFields").classList.toggle(
    "hidden",type !== "تيك أواي"
  );
}

// إرسال الطلب
function sendOrder() {

  if(!cart.length) {
    toast("السلة فاضية");
    return;
  }

  let customerDetails = [];

  if(orderType === "صالة") {

    const table = $("tableNumber").value.trim();

    if(!table || Number(table) < 1) {
      toast("اكتب رقم الترابيزة");
      $("tableNumber").focus();
      return;
    }

    customerDetails.push(
      "رقم الترابيزة: " + table
    );
  }

  if(orderType === "توصيل") {

    const address = $("address").value.trim();
    const phone = $("deliveryPhone").value.trim();

    if(address.length < 5) {
      toast("اكتب العنوان بالتفصيل");
      $("address").focus();
      return;
    }

    if(!/^01[0125][0-9]{8}$/.test(phone)) {
      toast("اكتب رقم موبايل مصري صحيح");
      $("deliveryPhone").focus();
      return;
    }

    customerDetails.push("العنوان: " + address);
    customerDetails.push("رقم العميل: " + phone);
  }

  if(orderType === "تيك أواي") {

    const name = $("pickupName").value.trim();
    const phone = $("pickupPhone").value.trim();

    if(!name) {
      toast("اكتب اسم حضرتك");
      $("pickupName").focus();
      return;
    }

    customerDetails.push("الاسم: " + name);

    if(phone) {
      if(!/^01[0125][0-9]{8}$/.test(phone)) {
        toast("رقم الموبايل غير صحيح");
        return;
      }
      customerDetails.push("رقم الموبايل: " + phone);
    }
  }

  const orderLines = cart.map((item,index) => {

    return (
      (index + 1) + "- " +
      item.name +
      (item.choice ? " (" + item.choice + ")" : "") +
      " × " + item.qty +
      " = " + money(item.price * item.qty)
    );

  });

  const notes = $("notes").value.trim();

  const message = `
🍗 *طلب جديد من SAQR Chicken*

━━━━━━━━━━━━━━

📍 *طريقة الاستلام:* ${orderType}

${customerDetails.join("\n")}

━━━━━━━━━━━━━━

🧾 *تفاصيل الطلب*

${orderLines.join("\n")}

━━━━━━━━━━━━━━

💰 *الإجمالي: ${money(total())}*

${notes ? "📝 ملاحظات: " + notes : ""}

❤️ شكراً لاختيار SAQR Chicken
`.trim();

  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message);

  window.open(url,"_blank");

}

// أحداث الأقسام
$("categories").addEventListener("click",event => {

  const button = event.target.closest("[data-category]");

  if(!button) return;

  activeCategory = button.dataset.category;

  renderCategories();
  renderMenu();

});

// البحث
$("searchInput").addEventListener(
  "input",renderMenu
);

// إضافة للسلة
$("menuGrid").addEventListener("click",event => {

  const button = event.target.closest("[data-add]");

  if(button) {
    addItem(Number(button.dataset.add));
  }

});

// تعديل الكميات
$("cartItems").addEventListener("click",event => {

  const button = event.target.closest("[data-qty]");

  if(!button) return;

  const index = Number(button.dataset.qty);
  const delta = Number(button.dataset.delta);

  cart[index].qty += delta;

  if(cart[index].qty <= 0) {
    cart.splice(index,1);
  }

  renderCart();

});

// أزرار السلة
$("openCart").onclick = openCart;
$("floatingCart").onclick = openCart;
$("closeCart").onclick = closeCart;
$("cartOverlay").onclick = closeCart;

// إكمال الطلب
$("checkout").onclick = openCheckout;

$("closeCheckout").onclick = () => {
  $("checkoutOverlay").classList.remove("show");
};

$("checkoutOverlay").addEventListener("click",event => {

  if(event.target === $("checkoutOverlay")) {
    $("checkoutOverlay").classList.remove("show");
  }

});

// طرق الاستلام
document.querySelectorAll(".type").forEach(button => {

  button.addEventListener("click",() => {
    setOrderType(button.dataset.type);
  });

});

// واتساب
$("sendWhatsApp").onclick = sendOrder;

// تشغيل الموقع
renderCategories();
renderMenu();
renderCart();
setOrderType("صالة");

console.log("SAQR Chicken Website Loaded Successfully 🍗");