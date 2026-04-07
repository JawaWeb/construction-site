// ============================================
// FORM-HANDLER.JS - Отправка форм
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Телефонная маска (простая)
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            let value = this.value.replace(/[^0-9+]/g, '');
            if (value.startsWith('+')) {
                // Международный формат
                if (value.length > 4 && value.slice(0, 3) === '+38') {
                    value = value.slice(0, 13);
                }
            } else if (value.length > 0 && !value.startsWith('+')) {
                value = '+38' + value.slice(0, 10);
            }
            this.value = value;
        });
    });
    
    // Сохранение заявок в localStorage (для демо)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const formData = new FormData(this);
            const application = {
                id: Date.now(),
                name: formData.get('name') || 'Не указано',
                phone: formData.get('phone') || 'Не указано',
                type: this.id || 'contact',
                date: new Date().toLocaleString('ru-RU')
            };
            
            // Сохраняем заявку в localStorage
            let applications = JSON.parse(localStorage.getItem('applications') || '[]');
            applications.unshift(application);
            localStorage.setItem('applications', JSON.stringify(applications));
            
            // Показываем уведомление
            showNotification('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
            
            // Очищаем форму
            this.reset();
        });
    });
});

function showNotification(message) {
    // Используем ту же функцию, что и в main.js
    if (typeof showToast === 'function') {
        showToast(message, 'success');
    } else {
        alert(message);
    }
}