import { createAction, props } from '@ngrx/store';
import { PhotosModel } from '../photos/photos.model';

export const retrivedPhotos = createAction(
  '[GET Phots] success',
  props<{ allPhotos: PhotosModel[] }>()
);
