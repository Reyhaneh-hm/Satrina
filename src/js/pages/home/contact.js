import '../../../scss/components/pages/home/contact.scss';

document.addEventListener('DOMContentLoaded', function () {
    // گرفتن المنت‌های فرم
    var form = document.getElementById('myForm');
    var phoneInput = document.getElementById('phone');
    var errorMessage = document.getElementById('error-message');

    // اضافه کردن event listener برای تایید شماره موبایل در هنگام تایپ
    phoneInput.addEventListener('input', function () {
        validateInput(phoneInput);
    });

    // اضافه کردن event listener برای ارسال فرم
    form.addEventListener('submit', function (event) {
        if (!validateForm(event)) {
            event.preventDefault();  // جلوگیری از ارسال فرم در صورت خطا
        }
    });

    // تابع validateInput برای اعتبارسنجی شماره موبایل
    function validateInput(input) {
        input.value = input.value.replace(/[^0-9]/g, '');  // حذف کاراکترهای غیر عددی
        if (input.value.length > 11) {
            input.value = input.value.slice(0, 11);  // محدود کردن به ۱۱ رقم
        }

        if (input.value.length === 11) {
            errorMessage.style.display = 'none';  // مخفی کردن پیام خطا
        }
    }

    // تابع validateForm برای بررسی فرم قبل از ارسال
    function validateForm(event) {
        var mobile = phoneInput.value.trim();

        if (mobile.length !== 11 || !mobile.startsWith('09')) {
            errorMessage.textContent = 'شماره موبایل باید دقیقا ۱۱ رقم باشد و با 09 شروع شود';
            errorMessage.style.display = 'block';  // نمایش پیام خطا
            return false;  // جلوگیری از ارسال فرم
        }

        errorMessage.style.display = 'none';  // مخفی کردن پیام خطا
        return true;  // اجازه ارسال فرم
    }
});
