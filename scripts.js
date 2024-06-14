document.addEventListener("DOMContentLoaded", () => {
    const announcementText = document.getElementById("announcement-text");
    const statuses = {
        province1: "Suspended",
        province2: "Normal",
        province3: "Normal",
        province4: "Suspended",
        province5: "Normal"
    };

    // Update announcement based on the statuses
    const updateAnnouncement = () => {
        let announcement = "Classes are suspended in: ";
        let suspendedProvinces = [];

        for (let province in statuses) {
            if (statuses[province] === "Suspended") {
                suspendedProvinces.push(province.replace('province', 'Province '));
            }
        }

        if (suspendedProvinces.length > 0) {
            announcementText.textContent = announcement + suspendedProvinces.join(", ");
        } else {
            announcementText.textContent = "No announcements at this time.";
        }
    };

    // Update status in the HTML
    for (let province in statuses) {
        document.getElementById(`status${province.replace('province', '')}`).textContent = statuses[province];
    }

    updateAnnouncement();
});
