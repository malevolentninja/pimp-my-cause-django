# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2016-10-23 22:11
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0017_auto_20161023_2035'),
    ]

    operations = [
        migrations.RenameField(
            model_name='causeprofile',
            old_name='categories',
            new_name='category',
        ),
        migrations.RemoveField(
            model_name='causeprofile',
            name='id',
        ),
        migrations.AlterField(
            model_name='causeprofile',
            name='profile',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL),
        ),
    ]
