import { createFeatureSelector } from '@ngrx/store';
import { Notificacion } from 'src/app/core/models/notificacion.model';

export const selectNotificacion =
  createFeatureSelector<ReadonlyArray<Notificacion>>('notificacion');
