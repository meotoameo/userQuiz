const examData = [
    {
        id: 1,
        name: "Luyện tập Hệ Điều Hành 1",
        details: "Bài thi về Hệ Điều Hành",
        time: 90,
        createdDate: "2024-03-05",
        type: "Luyện tập",
    },
    {
        id: 2,
        name: "Kiểm tra Mạng Máy Tính 1",
        details: "Bài thi về Mạng Máy Tính",
        time: 75,
        createdDate: "2024-03-06",
        type: "thi cuối kỳ",
    },
    {
        id: 3,
        name: "Kiểm tra Lập Trình Web 1",
        details: "Bài thi về Lập Trình Web",
        time: 120,
        createdDate: "2024-03-07",
        type: "thi giữa kỳ",
    },
    {
        id: 4,
        name: "Luyện tập Hệ Điều Hành 2",
        details: "Luyện tập Hệ Điều Hành",
        time: 90,
        createdDate: "2024-03-05",
        type: "Luyện tập",
    },
    // Các bài thi khác
];


function renderExamData(examData) {
    const wrapItem = document.querySelector(".wrap-item");
    wrapItem.innerHTML = "";

    examData.forEach((exam, index) => {
        const mainItem = document.createElement("div");
        mainItem.className = "main-item";
        const { name, details, createdDate, time } = exam;

        mainItem.innerHTML += `
          <h2 class="header-item">${name}</h2>
          <p>${details}</p>
          <div class="more-info">
            <div class="time-begin"><i class="fa-solid fa-calendar-days"></i><span>${createdDate}</span></div>
            <div class="time"><i class="fa-regular fa-clock"></i><span>${time}'</span></div>
          </div>
          <div class="footer-item">
            <button class="start-btn"><a href="../Exam/Exam.html">Vào thi</a></button>
          </div>`;

        // Áp dụng animation cho mỗi main-item
        mainItem.style.animationDelay = `${index * 0.1}s`; // Tạo hiệu ứng stagger

        wrapItem.appendChild(mainItem);
    });
}


// Gọi hàm renderExamData cho mỗi bài thi
renderExamData(examData)

const btnStart = document.querySelectorAll('.start-btn')
btnStart.forEach(button => {
    button.addEventListener('click', () => {
        // Chuyển hướng đến trang exam.html khi nút bắt đầu được nhấn
        window.location.href = '../Exam/Exam.html';
    });
});
// Gọi hàm renderExamData cho mỗi bài thi


const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");


const toggleDropdown = function () {
    dropdownMenu.classList.toggle("show");
    toggleArrow.classList.toggle("arrow");
};


dropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown();
});
const toggleDropMenu = function () {
    const menuUser = document.querySelector('.drop-menu')
    menuUser.classList.toggle("show");
};



window.onclick = function (event) {
    if (!event.target.matches('.btn')) {
        var dropdowns = document.getElementsByClassName("dropdown");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    const dropUserMenu = document.querySelector('.drop-user-menu');
    if (!(dropUserMenu && (dropUserMenu === event.target || dropUserMenu.contains(event.target)))) {
        // Mã để thực thi khi sự kiện click xảy ra trên '.drop-user-menu' hoặc con của nó
        var dropdown = document.querySelector(".drop-menu");
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }

}


function handleClick(element) {
    // Lấy giá trị của thuộc tính role từ đối tượng đang xảy ra sự kiện
    const roleValue = element.getAttribute('role');
    if (roleValue === 'all') {
        return renderExamData(examData)

    }

    // Lọc dữ liệu theo role
    const filteredExams = examData.filter(exam => exam.type === roleValue);

    // Hiển thị kết quả
    renderExamData(filteredExams)
    // Thêm logic xử lý tùy thuộc vào thông tin role
}

function searchExam(event) {
    event.preventDefault(); // Ngăn chặn form submit

    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();

    // Lọc dữ liệu theo trường name
    const filteredExams = examData.filter(exam => exam.name.toLowerCase().includes(searchTerm));

    // Hiển thị kết quả
    renderExamData(filteredExams)
    // Thêm logic xử lý tùy thuộc vào thông tin tìm kiếm
}