from django.contrib import admin
from .models import Feed

# Register your models here.
# admin.site.register(Feed)


# displying database fields in admin panel into table wise
@admin.register(Feed)
class FeedAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'image', 'description', 'like_count', 'comment_count', 'share_count', 'created_at')