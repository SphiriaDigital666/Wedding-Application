import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';

const EditPhotos = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" size="lg">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] md:min-w-[800px]">
        <DialogHeader>
          <DialogTitle>Edit Photos</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-5 mt-4">
          <Card className="w-full">
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="font-semibold">Photo 1</span>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="font-semibold">Photo 2</span>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="font-semibold">Photo 3</span>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="font-semibold">Photo 4</span>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="font-semibold">Photo 5</span>
            </CardContent>
          </Card>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditPhotos;
