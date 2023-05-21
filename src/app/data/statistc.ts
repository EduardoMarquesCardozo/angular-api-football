
export interface StatisticResponse {
  league: League
  team: Team
  form: string
  fixtures: Fixtures
  goals: Goals
  biggest: Biggest
  clean_sheet: CleanSheet
  failed_to_score: FailedToScore
  penalty: Penalty
  lineups: Lineup[]
}

export interface League {
  id: number
  name: string
  country: string
  logo: string
  flag: string
  season: number
}

export interface Team {
  id: number
  name: string
  logo: string
}

export interface Fixtures {
  played: Played
  wins: Wins
  draws: Draws
  loses: Loses
}

export interface Played {
  home: number
  away: number
  total: number
}

export interface Wins {
  home: number
  away: number
  total: number
}

export interface Draws {
  home: number
  away: number
  total: number
}

export interface Loses {
  home: number
  away: number
  total: number
}

export interface Goals {
  for: For
  against: Against
}

export interface For {
  total: Total
  average: Average
  minute: Minute
}

export interface Total {
  home: number
  away: number
  total: number
}

export interface Average {
  home: string
  away: string
  total: string
}

export interface Minute {
  "0-15": N015
  "16-30": N015
  "31-45": N015
  "46-60": N015
  "61-75": N015
  "76-90": N015
  "91-105": N015
  "106-120": N015
}

export interface N015 {
  total: number
  percentage: string
}

export interface Against {
  total: Total2
  average: Average2
  minute: Minute2
}

export interface Total2 {
  home: number
  away: number
  total: number
}

export interface Average2 {
  home: string
  away: string
  total: string
}

export interface Minute2 {
  "0-15": N015
  "16-30": N015
  "31-45": N015
  "46-60": N015
  "61-75": N015
  "76-90": N015
  "91-105": N015
  "106-120": N015
}

export interface Biggest {
  streak: Streak
  wins: Wins2
  loses: Loses2
  goals: Goals2
}

export interface Streak {
  wins: number
  draws: number
  loses: number
}

export interface Wins2 {
  home: string
  away: string
}

export interface Loses2 {
  home: string
  away: string
}

export interface Goals2 {
  for: For2
  against: Against2
}

export interface For2 {
  home: number
  away: number
}

export interface Against2 {
  home: number
  away: number
}

export interface CleanSheet {
  home: number
  away: number
  total: number
}

export interface FailedToScore {
  home: number
  away: number
  total: number
}

export interface Penalty {
  scored: Scored
  missed: Missed
  total: number
}

export interface Scored {
  total: number
  percentage: string
}

export interface Missed {
  total: number
  percentage: string
}

export interface Lineup {
  formation: string
  played: number
}

