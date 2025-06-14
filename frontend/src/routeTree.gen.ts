/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as NotesRouteImport } from './routes/notes/route'
import { Route as IndexImport } from './routes/index'
import { Route as NotesNoteIdImport } from './routes/notes/$noteId'
import { Route as DemoTanstackQueryImport } from './routes/demo.tanstack-query'

// Create/Update Routes

const NotesRouteRoute = NotesRouteImport.update({
  id: '/notes',
  path: '/notes',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const NotesNoteIdRoute = NotesNoteIdImport.update({
  id: '/$noteId',
  path: '/$noteId',
  getParentRoute: () => NotesRouteRoute,
} as any)

const DemoTanstackQueryRoute = DemoTanstackQueryImport.update({
  id: '/demo/tanstack-query',
  path: '/demo/tanstack-query',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/notes': {
      id: '/notes'
      path: '/notes'
      fullPath: '/notes'
      preLoaderRoute: typeof NotesRouteImport
      parentRoute: typeof rootRoute
    }
    '/demo/tanstack-query': {
      id: '/demo/tanstack-query'
      path: '/demo/tanstack-query'
      fullPath: '/demo/tanstack-query'
      preLoaderRoute: typeof DemoTanstackQueryImport
      parentRoute: typeof rootRoute
    }
    '/notes/$noteId': {
      id: '/notes/$noteId'
      path: '/$noteId'
      fullPath: '/notes/$noteId'
      preLoaderRoute: typeof NotesNoteIdImport
      parentRoute: typeof NotesRouteImport
    }
  }
}

// Create and export the route tree

interface NotesRouteRouteChildren {
  NotesNoteIdRoute: typeof NotesNoteIdRoute
}

const NotesRouteRouteChildren: NotesRouteRouteChildren = {
  NotesNoteIdRoute: NotesNoteIdRoute,
}

const NotesRouteRouteWithChildren = NotesRouteRoute._addFileChildren(
  NotesRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/notes': typeof NotesRouteRouteWithChildren
  '/demo/tanstack-query': typeof DemoTanstackQueryRoute
  '/notes/$noteId': typeof NotesNoteIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/notes': typeof NotesRouteRouteWithChildren
  '/demo/tanstack-query': typeof DemoTanstackQueryRoute
  '/notes/$noteId': typeof NotesNoteIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/notes': typeof NotesRouteRouteWithChildren
  '/demo/tanstack-query': typeof DemoTanstackQueryRoute
  '/notes/$noteId': typeof NotesNoteIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/notes' | '/demo/tanstack-query' | '/notes/$noteId'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/notes' | '/demo/tanstack-query' | '/notes/$noteId'
  id: '__root__' | '/' | '/notes' | '/demo/tanstack-query' | '/notes/$noteId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  NotesRouteRoute: typeof NotesRouteRouteWithChildren
  DemoTanstackQueryRoute: typeof DemoTanstackQueryRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  NotesRouteRoute: NotesRouteRouteWithChildren,
  DemoTanstackQueryRoute: DemoTanstackQueryRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/notes",
        "/demo/tanstack-query"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/notes": {
      "filePath": "notes/route.tsx",
      "children": [
        "/notes/$noteId"
      ]
    },
    "/demo/tanstack-query": {
      "filePath": "demo.tanstack-query.tsx"
    },
    "/notes/$noteId": {
      "filePath": "notes/$noteId.tsx",
      "parent": "/notes"
    }
  }
}
ROUTE_MANIFEST_END */
