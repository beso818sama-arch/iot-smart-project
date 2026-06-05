document.addEventListener("DOMContentLoaded", () => {
    // 1. ضعوا أسماءكم الثلاثية هنا داخل المصفوفة
    const groupMembers = [
        "Ahmed  Al-Balawi",
        "basel  Al-Balawi",
        "ziyad  Al-Balawi"
    ];

    // 2. خوارزمية (Fisher-Yates) لخبطة الأسماء عشوائياً بكل تحديث
    for (let i = groupMembers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [groupMembers[i], groupMembers[j]] = [groupMembers[j], groupMembers[i]];
    }

    // 3. الإمساك بالقائمة في صفحة الـ HTML وحقن الأسماء داخلها
    const listElement = document.getElementById("member-list");
    
    if (listElement) {
        listElement.innerHTML = ""; // تنظيف القائمة أولاً
        
        groupMembers.forEach(member => {
            const li = document.createElement("li");
            li.textContent = member;
            listElement.appendChild(li);
        });
    }
});