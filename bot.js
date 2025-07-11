// const TelegramBot = require('node-telegram-bot-api');

// const TOKEN = '8159948678:AAEXNhKQueEvVTQKq53HDlbECAjxhYCuF8M';
// const YOUR_CHAT_ID = 6201773686;
// const bot = new TelegramBot(TOKEN, { polling: true });

// const projectRequests = {}; // ذخیره مراحل درخواست پروژه کاربران

// // دکمه‌های منو اصلی (اضافه کردن گزینه /start دوباره)
// const mainMenu = {
//     reply_markup: {
//         keyboard: [
//             ["📌 درباره خدمات من", "💼 نمونه کارها"],
//             ["📝 ثبت درخواست پروژه", "📞 ارتباط با من"],
//             ["/start"]
//         ],
//         resize_keyboard: true,
//         one_time_keyboard: false
//     }
// };

// // شروع ربات و نمایش منو
// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//     const text = msg.text;
//     const firstName = msg.from.first_name || "دوست عزیز";

//     if (text === "/start") {
//         bot.sendMessage(chatId, `سلام ${firstName}! 😊\nبه ربات امیرعباس سلیمانی خوش اومدی. چطور می‌تونم کمکت کنم؟`, mainMenu);
//     } else if (text === "📌 درباره خدمات من") {
//         bot.sendMessage(chatId, `🚀 **خدماتی که ارائه می‌دهم:**\n\n🔹 طراحی و توسعه وب‌سایت\n🔹 ساخت ربات تلگرام\n🔹 برنامه‌نویسی React و Next.js\n🔹 اپلیکیشن‌های موبایل (React Native, Expo)\n🔹 انیمیشن‌های پویا و جذاب در UI/UX`, mainMenu);
//     } else if (text === "💼 نمونه کارها") {
//         bot.sendMessage(chatId, "🔹 **نمونه پروژه‌های من:**\n\n" +
//             "1️⃣ **وب‌سایت فروشگاهی شیکسون**\n🔗 [مشاهده پروژه](https://shixon.com)\n\n" +
//             "2️⃣ **ربات تلگرامی مدیریت سفارشات**\n🔗 [مشاهده پروژه](https://t.me/OrderManagementBot)\n\n" +
//             "3️⃣ **اپلیکیشن موبایل خدماتی مدیریت اقلیم**\n🔗 [مشاهده پروژه](https://play.google.com/store/apps/details?id=climate.management)\n\n" +
//             "4️⃣ **سایت شرکتی نوآوران دیجیتال**\n🔗 [مشاهده پروژه](https://novavaran.com)\n\n" +
//             "5️⃣ **داشبورد مدیریتی فروشگاه‌های اینترنتی**\n🔗 [مشاهده پروژه](https://dashboard.ecommerce.com)\n\n" +
//             "6️⃣ **ربات تلگرامی مدیریت رزرو سالن ورزشی**\n🔗 [مشاهده پروژه](https://t.me/SportsHallBot)\n\n" +
//             "7️⃣ **وب‌سایت شخصی و رزومه دیجیتال**\n🔗 [مشاهده پروژه](https://amirabbas.me)\n\n" +
//             "8️⃣ **اپلیکیشن یادآوری و مدیریت کارها (To-Do List)**\n🔗 [مشاهده پروژه](https://play.google.com/store/apps/details?id=todo.app)\n\n" +
//             "9️⃣ **سیستم حسابداری و مالی آنلاین**\n🔗 [مشاهده پروژه](https://accountingplatform.com)\n\n" +
//             "🔟 **ربات پشتیبانی خودکار مشتریان**\n🔗 [مشاهده پروژه](https://t.me/amirabbassly_bot)", {
//             reply_markup: {
//                 keyboard: [
//                     ["🔙 بازگشت به منو اصلی"]
//                 ],
//                 resize_keyboard: true
//             },
//             parse_mode: "Markdown"
//         });
//     } else if (text === "📞 ارتباط با من") {
//         bot.sendMessage(chatId, `📞 **راه‌های ارتباطی:**\n\n📧 ایمیل: amirabbas.sly@gmail.com\n📱 شماره تماس: 09397979861\n🌐 وب‌سایت: www.amirabbas.sly.com`, {
//             reply_markup: {
//                 inline_keyboard: [
//                     [{ text: "💬 پیام در تلگرام", url: "https://t.me/Soleymani_Qerklho" }],
//                     [{ text: "📸 پیج اینستاگرام", url: "https://www.instagram.com/amir.soleymani_1" }]
//                 ]
//             }
//         });
//     } else if (text === "📝 ثبت درخواست پروژه") {
//         projectRequests[chatId] = { step: 1 };
//         bot.sendMessage(chatId, "🔹 لطفاً نوع پروژه خود را انتخاب کنید:", {
//             reply_markup: {
//                 keyboard: [
//                     ["💻 طراحی سایت", "📱 طراحی اپلیکیشن موبایل"],
//                     ["🤖 ربات تلگرامی", "🎨 طراحی بصری (UI/UX)"],
//                     ["🔙 بازگشت به منو اصلی"]
//                 ],
//                 resize_keyboard: true
//             }
//         });
//     } else if (["💻 طراحی سایت", "📱 طراحی اپلیکیشن موبایل", "🤖 ربات تلگرامی", "🎨 طراحی بصری (UI/UX)"].includes(text)) {
//         projectRequests[chatId].type = text;
//         projectRequests[chatId].step = 2;
//         bot.sendMessage(chatId, "📝 لطفاً توضیحات کاملی درباره پروژه خود ارائه دهید:", {
//             reply_markup: {
//                 remove_keyboard: true
//             }
//         });
//     } else if (text === "🔙 بازگشت به منو اصلی") {
//         bot.sendMessage(chatId, "🔙 بازگشت به منو اصلی", mainMenu);
//     } else if (projectRequests[chatId]) {
//         const step = projectRequests[chatId].step;

//         if (step === 2) {
//             projectRequests[chatId].description = text;
//             projectRequests[chatId].step = 3;
//             bot.sendMessage(chatId, "💰 لطفاً بودجه پیشنهادی خود را وارد کنید:");
//         } else if (step === 3) {
//             projectRequests[chatId].budget = text;
//             projectRequests[chatId].step = 4;
//             bot.sendMessage(chatId, "📅 لطفاً تعداد روزهای انجام پروژه را مشخص کنید:");
//         } else if (step === 4) {
//             projectRequests[chatId].days = text;
//             projectRequests[chatId].step = 5;
//             bot.sendMessage(chatId, "📞 لطفاً شماره تماس خود را ارسال کنید:");
//         } else if (step === 5) {
//             projectRequests[chatId].phone = text;
//             projectRequests[chatId].step = 6;

//             const username = msg.from.username || "ندارد";
//             const fullName = `${msg.from.first_name || ""} ${msg.from.last_name || ""}`.trim();
//             const now = new Date();
//             const dateTime = now.toLocaleString("fa-IR");

//             const requestInfo = `📌 **درخواست جدید ثبت شد:**\n\n👤 نام کاربر: ${fullName}\n🔹 یوزرنیم تلگرام: @${username}\n📞 شماره تماس: ${projectRequests[chatId].phone}\n📅 تاریخ و ساعت: ${dateTime}\n\n🛠 نوع پروژه: ${projectRequests[chatId].type}\n📝 توضیحات: ${projectRequests[chatId].description}\n💰 بودجه: ${projectRequests[chatId].budget} تومان\n⏳ مدت انجام: ${projectRequests[chatId].days} روز`;

//             bot.sendMessage(YOUR_CHAT_ID, requestInfo);
//             bot.sendMessage(chatId, "✅ درخواست شما با موفقیت ثبت شد! به زودی با شما تماس می‌گیرم. 🙏", mainMenu);

//             delete projectRequests[chatId];
//         }
//     }
// });

// console.log("✅ ربات مدیریت بیزینس اجرا شد...");
//////////////////////////////edithed/////////////////////////////////////////
const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '8159948678:AAEXNhKQueEvVTQKq53HDlbECAjxhYCuF8M';
const YOUR_CHAT_ID = 6201773686;
const bot = new TelegramBot(TOKEN, { polling: true });

const projectRequests = {}; // ذخیره مراحل درخواست پروژه کاربران

// دکمه‌های منو اصلی (اضافه کردن گزینه تیم توسعه قدرتمند آرسیس)
const mainMenu = {
    reply_markup: {
        keyboard: [
            ["📌 درباره خدمات من", "💼 نمونه کارها"],
            ["📝 ثبت درخواست پروژه", "📞 ارتباط با من"],
            ["💬 چت ناشناس", "👥 تیم توسعه قدرتمند آرسیس"], // گزینه جدید
            ["/start"]
        ],
        resize_keyboard: true,
        one_time_keyboard: false
    }
};

// شروع ربات و نمایش منو
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    const firstName = msg.from.first_name || "دوست عزیز";

    if (text === "/start") {
        bot.sendMessage(chatId, `سلام ${firstName}! 😊\nبه ربات امیرعباس سلیمانی خوش اومدی. چطور می‌تونم کمکت کنم؟`, mainMenu);
    } else if (text === "📌 درباره خدمات من") {
        bot.sendMessage(chatId, `🚀 **خدماتی که ارائه می‌دهم:**\n\n🔹 طراحی و توسعه وب‌سایت\n🔹  خدمات سایبری . امنیت و شبکه \n🔹  توسعه بک اند\n🔹 توسعه هوش مصنوعی و مدل های Ai \n🔹 ساخت ربات تلگرام . اینستاگرام . دیسکورد\n🔹  برنامه‌نویسی React و Next.js\n🔹 اپلیکیشن‌های موبایل (React Native, Expo)\n🔹 انیمیشن‌های پویا و جذاب در UI/UX`, mainMenu);
    } else if (text === "💼 نمونه کارها") {
        bot.sendMessage(chatId, "🔹 **نمونه پروژه‌های من:**\n\n" +
            "1️⃣ **سیستم مدیریت اقلیم**\n🔗 [مشاهده پروژه](https://management.eghlym.com/)\n\n" +
            "2️⃣ **وب‌سایت اقلیم**\n🔗 [مشاهده پروژه](https://eghlym.com/)\n\n" +
            "3️⃣ **چت آنلاین اقلیم**\n🔗 [مشاهده پروژه](https://chat.eghlym.com/)\n\n" +
            "4️⃣ **دیجی‌استایل**\n🔗 [مشاهده پروژه](https://www.digistyle.com/)\n\n" +
            "5️⃣ **شیکسون**\n🔗 [مشاهده پروژه](https://www.shixon.com/)\n\n" +
            "6️⃣ **اوقات فراغت**\n🔗 [مشاهده پروژه](https://oghatfaraghat.ir/)\n\n" +
            "7️⃣ **دیوار**\n🔗 [مشاهده پروژه](https://divar.ir/)\n\n" +
            "8️⃣ **سلودامنه (اطلاعات دامنه)**\n🔗 [مشاهده پروژه](https://selvadomain.ir/domaininfo/filmserial.ir)\n\n" +
            "9️⃣ **معین‌سافت**\n🔗 [مشاهده پروژه](https://moeinsoft.com/)\n\n" +
            "🔟 **اپلیکیشن موج**\n🔗 [مشاهده پروژه](https://app.mowjapp.ir/login)\n\n" +
            "**AI Projects:**\n" +
            "1️⃣ **AI Project - Colab 1**\n🔗 [مشاهده پروژه](https://colab.research.google.com/drive/1gyxx-j0WhQzIR0mzsZdEmQ-HuZWY91PH)\n\n" +
            "2️⃣ **AI Project - Colab 2**\n🔗 [مشاهده پروژه](https://colab.research.google.com/drive/1LrIaAl4SQ30bjyxJBcVNRo-xo4o9ScmB)\n\n" +
            "3️⃣ **AI Project - فایل 1**\n🔗 [مشاهده پروژه](https://drive.google.com/file/d/1hP-IkL_jcdhpz_Nj51qNa3B756ONzIdQ/view?usp=drivesdk)\n\n" +
            "4️⃣ **AI Project - فایل 2**\n🔗 [مشاهده پروژه](https://drive.google.com/file/d/1RRTQxuNlxcKUFDNIGpbhHzKeKzke8zW4/view?usp=drivesdk)\n\n" +
            "5️⃣ **AI Project - پوشه 1**\n🔗 [مشاهده پروژه](https://drive.google.com/drive/folders/1jLcyPUDfZxk3Gx5QpyPkO0U7H0Q4o6wi)\n\n" +
            "6️⃣ **AI Project - پوشه 2**\n🔗 [مشاهده پروژه](https://drive.google.com/drive/folders/1w0ZIGRSJKUZjCrD7COtnsP5BxMxOAyAi)\n\n" +
            "7️⃣ **AI Project - تبدیل باینری به متن**\n🔗 [مشاهده پروژه](https://www.uten.ir/public/tool/binary-to-text)", {
            reply_markup: {
                keyboard: [["🔙 بازگشت به منو اصلی"]],
                resize_keyboard: true
            },
            parse_mode: "Markdown"
        });
    } else if (text === "📞 ارتباط با من") {
        bot.sendMessage(chatId, `📞 **راه‌های ارتباطی:**\n\n📧 ایمیل: amirabas.sly@gmail.com\n📱 شماره تماس: 09397979861\n🌐 وب‌سایت: www.amirabbas.sly.com`, {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "💬 پیام در تلگرام", url: "https://t.me/Soleymani_Qerklho" }],
                    [{ text: "📸 پیج اینستاگرام", url: "https://www.instagram.com/amir.soleymani_1" }]
                ]
            }
        });
    } else if (text === "📝 ثبت درخواست پروژه") {
        projectRequests[chatId] = { step: 1 };
        bot.sendMessage(chatId, "🔹 لطفاً نوع پروژه خود را انتخاب کنید:", {
            reply_markup: {
                keyboard: [
                    ["💻 طراحی سایت", "📱 طراحی اپلیکیشن موبایل"],
                    ["🤖 ربات تلگرامی", "🎨 طراحی بصری (UI/UX)"],
                    ["🔙 بازگشت به منو اصلی"]
                ],
                resize_keyboard: true
            }
        });
    } else if (text === "💬 چت ناشناس") {
        bot.sendMessage(chatId, "💬 اینجا می‌تونی هرچی دلت خواست به‌صورت ناشناس بگی! خیالت راحت باشه، هیچ‌کس نمی‌فهمه کی هستی. فقط کافیه پیامت رو بنویسی و بفرستی:", {
            reply_markup: {
                remove_keyboard: true
            }
        });
    } else if (text === "👥 تیم توسعه قدرتمند آرسیس") {
        bot.sendMessage(chatId, "👥 **تیم توسعه قدرتمند آرسیس**\nبرای آشنایی با تیم ما و پروژه‌هامون، به کانالم سر بزن:", {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "ورود به کانال", url: "https://t.me/+8zHYUzOw68s1NDM0" }]
                ]
            }
        });
    } else if (["💻 طراحی سایت", "📱 طراحی اپلیکیشن موبایل", "🤖 ربات تلگرامی", "🎨 طراحی بصری (UI/UX)"].includes(text)) {
        projectRequests[chatId].type = text;
        projectRequests[chatId].step = 2;
        bot.sendMessage(chatId, "📝 لطفاً توضیحات کاملی درباره پروژه خود ارائه دهید:", {
            reply_markup: {
                remove_keyboard: true
            }
        });
    } else if (text === "🔙 بازگشت به منو اصلی") {
        bot.sendMessage(chatId, "🔙 بازگشت به منو اصلی", mainMenu);
    } else if (projectRequests[chatId]) {
        const step = projectRequests[chatId].step;

        if (step === 2) {
            projectRequests[chatId].description = text;
            projectRequests[chatId].step = 3;
            bot.sendMessage(chatId, "💰 لطفاً بودجه پیشنهادی خود را وارد کنید:");
        } else if (step === 3) {
            projectRequests[chatId].budget = text;
            projectRequests[chatId].step = 4;
            bot.sendMessage(chatId, "📅 لطفاً تعداد روزهای انجام پروژه را مشخص کنید:");
        } else if (step === 4) {
            projectRequests[chatId].days = text;
            projectRequests[chatId].step = 5;
            bot.sendMessage(chatId, "📞 لطفاً شماره تماس خود را ارسال کنید:");
        } else if (step === 5) {
            projectRequests[chatId].phone = text;
            projectRequests[chatId].step = 6;

            const username = msg.from.username || "ندارد";
            const fullName = `${msg.from.first_name || ""} ${msg.from.last_name || ""}`.trim();
            const now = new Date();
            const dateTime = now.toLocaleString("fa-IR");

            const requestInfo = `📌 **درخواست جدید ثبت شد:**\n\n👤 نام کاربر: ${fullName}\n🔹 یوزرنیم تلگرام: @${username}\n📞 شماره تماس: ${projectRequests[chatId].phone}\n📅 تاریخ و ساعت: ${dateTime}\n\n🛠 نوع پروژه: ${projectRequests[chatId].type}\n📝 توضیحات: ${projectRequests[chatId].description}\n💰 بودجه: ${projectRequests[chatId].budget} تومان\n⏳ مدت انجام: ${projectRequests[chatId].days} روز`;

            bot.sendMessage(YOUR_CHAT_ID, requestInfo);
            bot.sendMessage(chatId, "✅ درخواست شما با موفقیت ثبت شد! به زودی با شما تماس می‌گیرم. 🙏", mainMenu);

            delete projectRequests[chatId];
        }
    } else {
        // منطق چت ناشناس
        const lastMessage = bot.getUpdates({ offset: -1 }).then(updates => updates[0]?.message?.text);
        if (lastMessage !== "💬 چت ناشناس") {
            const username = msg.from.username || "ندارد";
            const fullName = `${msg.from.first_name || ""} ${msg.from.last_name || ""}`.trim();
            const userId = msg.from.id;
            const now = new Date();
            const dateTime = now.toLocaleString("fa-IR");

            const anonymousMessage = `💬 **پیام ناشناس جدید:**\n\n👤 نام کاربر: ${fullName}\n🔹 یوزرنیم: @${username}\n🆔 آیدی: ${userId}\n📅 تاریخ و ساعت: ${dateTime}\n\n📝 پیام: ${text}`;

            bot.sendMessage(YOUR_CHAT_ID, anonymousMessage);
            bot.sendMessage(chatId, "✅ پیامت ثبت شد! خیالت راحت باشه، هیچ‌کس نمی‌دونه کی هستی. 😊 اگه بازم چیزی می‌خوای بگی، همین‌جا بنویس یا به منو اصلی برگرد:", mainMenu);
        }
    }
});

console.log("✅ ربات مدیریت بیزینس اجرا شد...");