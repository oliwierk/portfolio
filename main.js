document.addEventListener("DOMContentLoaded", () => {
	const themeToggles = document.querySelectorAll(".theme-controller");

	// Sprawdź stan z localStorage i zaktualizuj radio buttons
	const isDark = JSON.parse(localStorage.getItem("isdark"));

	themeToggles.forEach(toggle => {
		if (
			(isDark && toggle.value === "dark") ||
			(!isDark && toggle.value === "light")
		) {
			toggle.checked = true;
		}
	});

	// Aktualizacja klasy body na podstawie stanu
	document.body.classList.toggle("dark", isDark);

	themeToggles.forEach(toggle => {
		toggle.addEventListener("change", () => {
			const isDark = toggle.value === "dark";
			localStorage.setItem("isdark", JSON.stringify(isDark));
			// Opcjonalnie: Zaktualizuj ciało dokumentu, aby odzwierciedlić zmianę motywu
			document.body.classList.toggle("dark", isDark);
		});
	});
});
