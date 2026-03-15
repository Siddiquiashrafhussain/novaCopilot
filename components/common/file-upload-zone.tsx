'use client'

import { useState } from 'react'
import { Upload } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface FileUploadZoneProps {
  onFilesSelected?: (files: File[]) => void
  maxSize?: number
  acceptedTypes?: string[]
}

export default function FileUploadZone({
  onFilesSelected,
  maxSize = 10 * 1024 * 1024, // 10MB
  acceptedTypes = ['.csv', '.xlsx', '.json'],
}: FileUploadZoneProps) {
  const [isDragActive, setIsDragActive] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

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
    processFiles(files)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    processFiles(files)
  }

  const processFiles = (files: File[]) => {
    const validFiles = files.filter((file) => {
      if (file.size > maxSize) return false
      return acceptedTypes.some((type) => file.name.endsWith(type))
    })
    setUploadedFiles(validFiles)
    onFilesSelected?.(validFiles)
  }

  return (
    <Card className="bg-card border-2 border-dashed border-border hover:border-accent/50 transition-colors">
      <CardContent className="pt-6">
        <div
          className={`relative p-8 text-center rounded-lg transition-colors ${
            isDragActive ? 'bg-secondary' : ''
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            multiple
            onChange={handleChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            accept={acceptedTypes.join(',')}
          />
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 bg-secondary rounded-lg">
              <Upload className="w-6 h-6 text-accent" />
            </div>
            <p className="font-medium text-foreground">Drag files here or click to select</p>
            <p className="text-sm text-muted-foreground">
              {acceptedTypes.join(', ')} • Max {Math.round(maxSize / 1024 / 1024)}MB
            </p>
          </div>

          {uploadedFiles.length > 0 && (
            <div className="mt-4 pt-4 border-t border-border text-left">
              <p className="text-sm font-medium text-foreground mb-2">Selected files:</p>
              <ul className="space-y-1">
                {uploadedFiles.map((file) => (
                  <li key={file.name} className="text-xs text-muted-foreground">
                    ✓ {file.name} ({(file.size / 1024).toFixed(2)}KB)
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
