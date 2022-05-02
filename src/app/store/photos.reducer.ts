import { createReducer, on } from '@ngrx/store';
import { PhotosModel } from '../photos/photos.model';
import { retrivedPhotos } from './photos.actions';

export const inistialStat: PhotosModel[] = [];

const _photosReducer = createReducer(
  inistialStat,
  on(retrivedPhotos, (state, { allPhotos }) => {
    return [...allPhotos];
  })
);

export function callReducer(state: any, action: any) {
  return _photosReducer(state, action);
}
