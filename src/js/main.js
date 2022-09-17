const notificationsBadge = document.querySelector('#notifications-badge');
const markAllReadButton = document.querySelector('#mark-all-read');

const handleMarkAllReadButton = () => {
	notificationsBadge.dataset.notifications = 0;
	const notifications = document.querySelectorAll('.notification');
	notifications.forEach((notification) => {
		if (notification.dataset.status === 'unread') notification.classList.add('scale-up-down-animation');
		notification.dataset.status = 'read';
	});
};

markAllReadButton.addEventListener('click', handleMarkAllReadButton);
