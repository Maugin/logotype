$(document).ready(function() {
    $('.feature-item').on('click', function (e) {
        e.preventDefault();

        var $this = $(this),
            item = $this.closest('.accordeon li'),
            list = $this.closest('.accordeon'),
            items = list.find('.accordeon li'),
            content = item.find('.feature-text'),
            otherContent = list.find('.feature-text'),
            duration = 300;

        if (!item.hasClass('active')) {
            items.removeClass('active');
            item.addClass('active').find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
            otherContent.stop(true, true).slideUp(duration);
            content.stop(true, true).slideDown(duration);
        } else {
            content.stop(true, true).slideUp(duration);
            item.stop(true, true).removeClass('active').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
        }
    });
    
});