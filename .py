DATABASES = {
    'default': {
        'ENGINE': 'django.contrib.gis.db.backends.postgis',
        'NAME': os.environ['DB_NAME'],
        'USER': os.environ['DB_USER'],
        'PASSWORD': os.environ['DB_PASSWORD'],
        'HOST': os.environ.get('DB_HOST', 'localhost'),
        'PORT': os.environ.get('DB_PORT', '5432'),
    }
}

from django.contrib.gis.db import models
class Etablissement(models.Model):
    nom = models.CharField(max_length=180)
    localisation = models.PointField(srid=4326, spatial_index=True)

Etablissement.objects.filter(
    localisation__within=commune.geom
)


Etablissement.objects.filter(
    localisation__distance_lte=(point, D(m=1000))
)




from .models import NOMS

mon_nom ="Elhadji"

nouveau_nom = NOMS.objects.create(nom=mon_nom)
nouveau_nom.save()