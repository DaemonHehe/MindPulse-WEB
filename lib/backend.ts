import "server-only"

const API_BASE =
  process.env.MINDPULSE_API_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:4000"

const API_TOKEN = process.env.MINDPULSE_API_TOKEN || process.env.NEXT_PUBLIC_API_TOKEN

export interface ApiResponse<T> {
  success: boolean
  message: string
  data: T
}

export interface User {
  id: string
  name: string
  email: string
  age?: number
  gender?: string
  timezone?: string
  goals?: {
    sleepHoursTarget?: number
    stepsPerDayTarget?: number
    stressReductionPriority?: boolean
  }
}

export interface WindowFeatures {
  HR_mean?: number
  HRV_RMSSD?: number
  EDA_mean?: number
  TEMP_mean?: number
  steps?: number
  resp_rate?: number
  spo2_mean?: number
}

export interface WindowData {
  id: string
  startTime: string
  endTime: string
  features?: WindowFeatures
}

export interface Prediction {
  id: string
  stressLevel?: number
  stressLabel?: string
  moodClass?: string
  fatigueLevel?: number
  modelVersion?: string
  createdAt?: string
}

export interface CoachingMessage {
  id: string
  headline?: string
  message?: string
  suggestions?: {
    type?: string
    title?: string
    actionId?: string
  }[]
}

export interface JournalEntry {
  id: string
  timestamp: string
  moodRating: number
  energyLevel?: number
  stressSelfReport?: number
  note?: string
}

type BackendRequestInit = RequestInit & { skipAuth?: boolean }

export async function backendFetch<T>(path: string, init: BackendRequestInit = {}): Promise<ApiResponse<T>> {
  const url = path.startsWith("http") ? path : `${API_BASE}${path.startsWith("/") ? path : `/${path}`}`
  const headers: Record<string, string> = {
    Accept: "application/json",
    ...(init.headers as Record<string, string>),
  }

  if (!init.skipAuth && API_TOKEN) {
    headers.Authorization = `Bearer ${API_TOKEN}`
  }

  const response = await fetch(url, {
    ...init,
    cache: init.cache ?? "no-store",
    headers,
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`Backend request failed (${response.status}): ${body || response.statusText}`)
  }

  return (await response.json()) as ApiResponse<T>
}

export function normalizePercent(value?: number | null) {
  if (value === null || value === undefined || Number.isNaN(value)) return undefined
  if (value <= 1) return Math.round(value * 100)
  return Math.round(value)
}
