import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import React from 'react'



const Project = ({register}:any) => {
  return (
    <div className="bg-slate-900/50 border border-slate-700 rounded-md p-3 sm:p-4 space-y-3 sm:space-y-4">
                      <div className="space-y-2">
                        <Input
                          {...register("project.title")}
                          placeholder="Project Title"
                          className="bg-slate-800/50 border-slate-700 focus:border-purple-500 text-sm"
                        />
                        <Textarea
                          {...register("project.description")}
                          placeholder="Brief description of the project, your role, and key achievements..."
                          className="min-h-16 sm:min-h-20 bg-slate-800/50 border-slate-700 focus:border-purple-500 text-sm"
                        />
                        <Input
                          {...register("project.url")}
                          placeholder="Project URL"
                          className="bg-slate-800/50 border-slate-700 focus:border-purple-500 text-sm"
                        />
                      </div>
                    </div>
  )
}

export default Project