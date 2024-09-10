'use client'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  

import { useSelf } from '@liveblocks/react/suspense'
import React, { useState } from 'react'
import { Button } from "./ui/button"
import Image from "next/image"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import UserTypeSelector from "./UserTypeSelector"

const ShareModal = ({ roomId, collaborators, creatorId, currentUserType}: ShareDocumentDialogProps) => {
    const user = useSelf();

    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const [email, setEmail] = useState('')
    const [userType, setUserType] = useState<UserType>('viewer')

    const shareDocumentHandler = async () => {

    }


  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
            <Button className="gradient-blue flex h-9 gap-1 px-4" disabled={currentUserType !== 'editor'}>
                <Image
                alt="share"
                src="/assets/icons/share.svg"
                width={20}
                height={20}
                className="min-w-4 md:size-5"
                />
                <p className="mr-1 hidden sm:block">
                    Share

                </p>
            </Button>
        </DialogTrigger>
        <DialogContent className="shad-dialog">
            <DialogHeader >
            <DialogTitle>Manage who can view this document</DialogTitle>
            <DialogDescription>
                Select which users can view and edit this document
            </DialogDescription>
            </DialogHeader>

            <Label htmlFor="email" className="mt-6 text-blue-100">
                Email addrress
            </Label>
            <div className="flex items-center gap-3">
                <div className="flex flex-1 rounded-md bg-dark-400">
                    <Input
                    id="email"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    className="share-input"
                    />
                    <UserTypeSelector
                    userType={userType}
                    setUserType={setUserType}
                    />
                </div>

            </div>
        </DialogContent>
    </Dialog>

  )
}

export default ShareModal