# # This is an auto-generated Django model module.
# # You'll have to do the following manually to clean this up:
# #   * Rearrange models' order
# #   * Make sure each model has one field with primary_key=True
# #   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
# #   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# # Feel free to rename the models, but don't rename db_table values or field names.
# from django.db import models


# class AuthGroup(models.Model):
#     id = models.TextField(primary_key=True)  # This field type is a guess.
#     name = models.CharField(unique=True)

#     class Meta:
#         managed = False
#         db_table = 'auth_group'


# class AuthGroupPermissions(models.Model):
#     group_id = models.TextField()  # This field type is a guess.
#     id = models.TextField(primary_key=True)  # This field type is a guess.
#     permission_id = models.TextField()  # This field type is a guess.

#     class Meta:
#         managed = False
#         db_table = 'auth_group_permissions'
#         unique_together = (('group_id', 'permission_id'),)


# class AuthPermission(models.Model):
#     codename = models.CharField()
#     content_type_id = models.TextField()  # This field type is a guess.
#     id = models.TextField(primary_key=True)  # This field type is a guess.
#     name = models.CharField()

#     class Meta:
#         managed = False
#         db_table = 'auth_permission'
#         unique_together = (('content_type_id', 'codename'),)


# class AuthUser(models.Model):
#     date_joined = models.DateTimeField()
#     email = models.CharField()
#     first_name = models.CharField()
#     id = models.TextField(primary_key=True)  # This field type is a guess.
#     is_active = models.TextField()  # This field type is a guess.
#     is_staff = models.TextField()  # This field type is a guess.
#     is_superuser = models.TextField()  # This field type is a guess.
#     last_login = models.DateTimeField()
#     last_name = models.CharField()
#     password = models.CharField()
#     username = models.CharField(unique=True)

#     class Meta:
#         managed = False
#         db_table = 'auth_user'


# class AuthUserGroups(models.Model):
#     group_id = models.TextField()  # This field type is a guess.
#     id = models.TextField(primary_key=True)  # This field type is a guess.
#     user_id = models.TextField()  # This field type is a guess.

#     class Meta:
#         managed = False
#         db_table = 'auth_user_groups'
#         unique_together = (('user_id', 'group_id'),)


# class AuthUserUserPermissions(models.Model):
#     id = models.TextField(primary_key=True)  # This field type is a guess.
#     permission_id = models.TextField()  # This field type is a guess.
#     user_id = models.TextField()  # This field type is a guess.

#     class Meta:
#         managed = False
#         db_table = 'auth_user_user_permissions'
#         unique_together = (('user_id', 'permission_id'),)


# class DjangoAdminLog(models.Model):
#     action_flag = models.TextField()  # This field type is a guess.
#     action_time = models.DateTimeField()
#     change_message = models.CharField()
#     content_type_id = models.TextField()  # This field type is a guess.
#     id = models.TextField(primary_key=True)  # This field type is a guess.
#     object_id = models.CharField()
#     object_repr = models.CharField()
#     user_id = models.TextField()  # This field type is a guess.

#     class Meta:
#         managed = False
#         db_table = 'django_admin_log'


# class DjangoContentType(models.Model):
#     app_label = models.CharField()
#     id = models.TextField(primary_key=True)  # This field type is a guess.
#     model = models.CharField()

#     class Meta:
#         managed = False
#         db_table = 'django_content_type'
#         unique_together = (('app_label', 'model'),)


# class DjangoMigrations(models.Model):
#     app = models.CharField()
#     applied = models.DateTimeField()
#     id = models.TextField(primary_key=True)  # This field type is a guess.
#     name = models.CharField()

#     class Meta:
#         managed = False
#         db_table = 'django_migrations'


# class DjangoSession(models.Model):
#     expire_date = models.DateTimeField()
#     session_data = models.CharField()
#     session_key = models.CharField(primary_key=True)

#     class Meta:
#         managed = False
#         db_table = 'django_session'
# # Unable to inspect table 'menu'
# # The error was: 'NoneType' object is not subscriptable


# class TutorialsTutorial(models.Model):
#     description = models.CharField()
#     id = models.TextField(primary_key=True)  # This field type is a guess.
#     published = models.TextField()  # This field type is a guess.
#     title = models.CharField()

#     class Meta:
#         managed = False
#         db_table = 'tutorials_tutorial'


