import React, { forwardRef } from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetProps
} from '@gorhom/bottom-sheet';

export const BottomModal = forwardRef<BottomSheet, BottomSheetProps>(
  ({ backdropComponent, children, snapPoints, ...props }, ref) => {
    const Backdrop: React.FC<BottomSheetBackdropProps> = (props) => (
      <BottomSheetBackdrop
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        {...props}
      />
    );

    return (
      <BottomSheet
        ref={ref}
        index={-1}
        snapPoints={snapPoints}
        backdropComponent={backdropComponent ?? Backdrop}
        {...props}
      >
        {children}
      </BottomSheet>
    );
  }
);
