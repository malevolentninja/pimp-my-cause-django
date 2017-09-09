from django.contrib import admin

from models import NewsPost


class NewsPostAdmin(admin.ModelAdmin):

    list_display = ['title', 'created_at']


admin.site.register(NewsPost, NewsPostAdmin)
