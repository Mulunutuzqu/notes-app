import { CircleCheckBig } from 'lucide-react'
import { AnimatePresence, motion, MotionConfig } from 'motion/react'
import { useState } from 'react'

interface SaveButtonProps {
  isLoading: boolean
  isSaved: boolean
  onClick?: () => void | null | undefined
}

export default function SaveButton({
  isLoading,
  isSaved,
  onClick,
}: SaveButtonProps) {
  const transition = {
    type: 'spring',
    bounce: 0.35,
    duration: 0.55,
  }

  const variants = {
    initial: { scale: 0.6, opacity: 0, filter: 'blur(4px)' },
    animate: { scale: 1, opacity: 1, filter: 'blur(0px)' },
    exit: { scale: 0.6, opacity: 0, filter: 'blur(4px)' },
  }

  //   const [isLoading, setIsLoading] = useState(loading)
  //   const [isSaved, setIsSaved] = useState(saved)

  return (
    <motion.div
      className={`h-[40px] py-[4px] ${isLoading ? 'bg-transparent' : 'bg-green-100'} flex gap-[16px] items-center  justify-end relative`}
      style={{ borderRadius: 24 }}
      animate={{
        width: isSaved ? 372 : 112,
        paddingRight: isSaved ? 4 : 0,
        // height: isSaved ? 48 : 40,
        // paddingTop: isSaved ? 8 : 0,
        // paddingBottom: isSaved ? 8 : 0,
      }}
      transition={transition}
    >
      <AnimatePresence mode="popLayout">
        {isSaved ? (
          <motion.div
            key="saveMessage"
            transition={transition}
            initial={{ x: 20, opacity: 0, filter: 'blur(8px)' }}
            animate={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
            exit={{ x: 20, opacity: 0, filter: 'blur(8px)' }}
            className="flex gap-[8px] items-center font-medium w-[212px] text-green-600 ml-[12px] absolute left-0 z-0"
          >
            <CircleCheckBig size={20} />
            <p className="">Note saved</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <motion.button
        key="save-button"
        style={{ borderRadius: 20 }}
        initial={{ width: 96 }}
        animate={{
          width: isLoading ? 56 : 96,
          height: isSaved ? 32 : 40,
        }}
        transition={transition}
        onClick={onClick}
        className={`flex h-[40px] font-bold items-center justify-center transition-colors duration-300 ${isSaved ? 'bg-white text-green-700' : 'bg-primary text-white'} ${isLoading || isSaved ? '' : 'cursor-pointer'} ease-out  z-50 shadow-md `}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <MotionConfig transition={transition}>
            {isLoading ? (
              <motion.div
                className="flex items-center justify-center relative"
                key="spinner"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <motion.span className="loader absolute" />
              </motion.div>
            ) : (
              <motion.div
                key="text"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex relative justify-center items-center gap-[0px]"
              >
                <motion.p key="buttonText">
                  {isSaved ? 'Success!' : 'Save'}
                </motion.p>
              </motion.div>
            )}
          </MotionConfig>
        </AnimatePresence>
      </motion.button>
    </motion.div>
  )
}
