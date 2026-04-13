import { NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

export async function GET(req, { params }) {
    const { model } = await params
    try {
        const delegate = prisma[model]
        if (!delegate) return NextResponse.json({ error: 'Model not found' }, { status: 404 })
        
        const data = await delegate.findMany({ orderBy: { id: 'desc' } })
        return NextResponse.json(data)
    } catch (e) {
        return NextResponse.json({ error: e.message }, { status: 500 })
    }
}

export async function POST(req, { params }) {
    const { model } = await params
    try {
        const delegate = prisma[model]
        if (!delegate) return NextResponse.json({ error: 'Model not found' }, { status: 404 })
        
        const body = await req.json()
        const data = await delegate.create({ data: body })
        return NextResponse.json(data)
    } catch (e) {
        return NextResponse.json({ error: e.message }, { status: 500 })
    }
}

export async function PUT(req, { params }) {
    const { model } = await params
    try {
        const delegate = prisma[model]
        if (!delegate) return NextResponse.json({ error: 'Model not found' }, { status: 404 })
        
        const body = await req.json()
        if (!body.id) return NextResponse.json({ error: 'ID is required to update' }, { status: 400 })
        
        const { id, ...updateData } = body
        const data = await delegate.update({
            where: { id: parseInt(id) },
            data: updateData
        })
        return NextResponse.json(data)
    } catch (e) {
        return NextResponse.json({ error: e.message }, { status: 500 })
    }
}

export async function DELETE(req, { params }) {
    const { model } = await params
    try {
        const delegate = prisma[model]
        if (!delegate) return NextResponse.json({ error: 'Model not found' }, { status: 404 })
        
        const { searchParams } = new URL(req.url)
        const id = searchParams.get('id')
        if (!id) return NextResponse.json({ error: 'ID is required to delete' }, { status: 400 })
        
        await delegate.delete({
            where: { id: parseInt(id) }
        })
        return NextResponse.json({ success: true })
    } catch (e) {
        return NextResponse.json({ error: e.message }, { status: 500 })
    }
}
