import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import EditPhotos from '../edit/edit-photos';

const PhotosCarousel = () => {
  return (
    <div className="container p-5 mt-10 shadow-md rounded-md">
      <div className="justify-between p-10">
        <div className="flex justify-between">
          <span className="text-2xl">Photos</span>
          <EditPhotos />
        </div>
        <div className="flex gap-5 mt-4">
          <Card className="w-full">
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-2xl font-semibold">Photo 1</span>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-2xl font-semibold">Photo 2</span>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-2xl font-semibold">Photo 3</span>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-2xl font-semibold">Photo 4</span>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-2xl font-semibold">Photo 5</span>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PhotosCarousel;
