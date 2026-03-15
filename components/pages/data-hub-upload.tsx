'use client'

import { useState } from 'react'
import { Cloud, CheckCircle2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface DataHubUploadProps {
  onFilesSelected?: (files: File[]) => void
}

export default function DataHubUpload({ onFilesSelected }: DataHubUploadProps) {
  const [isDragActive, setIsDragActive] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragActive(true)
    } else if (e.type === 'dragleave') {
      setIsDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragActive(false)
    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      processFile(files[0])
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFile(e.target.files[0])
    }
  }

  const processFile = (file: File) => {
    if (file.size <= 50 * 1024 * 1024) {
      setUploadedFile(file)
      onFilesSelected?.([file])
    }
  }

  return (
    <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
      <CardContent className="pt-8 pb-8">
        <div
          className={`relative p-12 text-center rounded-xl border-2 border-dashed transition-all ${
            isDragActive
              ? 'border-indigo-400 bg-indigo-500/5'
              : uploadedFile
                ? 'border-emerald-500/50 bg-emerald-500/5'
                : 'border-slate-600 hover:border-indigo-500/50'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            onChange={handleChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            accept=".csv,.xlsx,.xls,.json"
          />

          {uploadedFile ? (
            <div className="space-y-3">
              <div className="flex justify-center">
                <CheckCircle2 className="w-12 h-12 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{uploadedFile.name}</h3>
              <p className="text-sm text-muted-foreground">
                {(uploadedFile.size / 1024 / 1024).toFixed(2)}MB ready for analysis
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-2"
              >
                Change File
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="p-4 bg-indigo-500/10 rounded-lg">
                  <Cloud className="w-8 h-8 text-indigo-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Upload Dataset</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Drag and drop your business CSV or Excel files here. Max file size: 50MB.
                </p>
              </div>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                Browse Files
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
