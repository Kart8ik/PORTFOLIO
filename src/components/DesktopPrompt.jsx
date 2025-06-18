import React, { useState, useEffect } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const DesktopPrompt = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isSmallScreen = window.matchMedia('(max-width: 640px)').matches;
    const hasBeenShown = sessionStorage.getItem('desktopPromptShown');

    if (isSmallScreen && !hasBeenShown) {
      setIsOpen(true);
    }
  }, []);

  const handleContinue = () => {
    sessionStorage.setItem('desktopPromptShown', 'true');
    setIsOpen(false);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Heads up!</AlertDialogTitle>
          <AlertDialogDescription>
            This website looks way better on a laptop or desktop. Consider switching for the best experience! 😭
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={handleContinue}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DesktopPrompt; 