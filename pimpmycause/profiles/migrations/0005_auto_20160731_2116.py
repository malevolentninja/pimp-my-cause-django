# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2016-07-31 21:16
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0004_auto_20160730_2136'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pimpuser',
            name='usertype',
            field=models.IntegerField(blank=True, choices=[(0, 'Marketer'), (1, 'Cause')]),
        ),
    ]
